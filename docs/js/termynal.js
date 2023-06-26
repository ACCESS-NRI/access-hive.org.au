/**
 * termynal.js
 * A lightweight, modern and extensible animated terminal window, using
 * async/await.
 *
 * @author Ines Montani <ines@ines.io>
 * @version 0.0.1
 * @license MIT
 */

'use strict';

/** Generate a terminal widget. */
class Termynal {
    /**
     * Construct the widget's settings.
     * @param {(string|Node)=} container - Query selector or container element.
     * @param {Object=} options - Custom settings.
     * @param {number} options.startDelay - Delay before animation, in ms.
     * @param {number} options.typeDelay - Delay between each typed character, in ms.
     * @param {number} options.lineDelay - Delay between each line, in ms.
     * @param {number} options.progressLength - Number of characters displayed as progress bar.
     * @param {string} options.progressChar – Character to use for progress bar, defaults to █.
	 * @param {number} options.progressPercent - Max percent of progress.
     * @param {string} options.cursor – Character to use for cursor, defaults to ▋.
     * @param {string} options.charBeforeInput – Character to use before the input prompts, defaults to $.
     * @param {boolean} options.noInit - Don't initialise the animation.
     */
    constructor({container = '.termynal', options={}} = {}) {
        this.container = (typeof container === 'string') ? document.querySelector(container) : container;
        this.pfx = 'data-ty';
        this.originalStartDelay = this.startDelay = options.startDelay
            || parseFloat(this.container.getAttribute('startDelay')) || 600;
        this.originalTypeDelay = this.typeDelay = options.typeDelay
            || parseFloat(this.container.getAttribute('typeDelay')) || 90;
        this.originalLineDelay = this.lineDelay = options.lineDelay
            || parseFloat(this.container.getAttribute('lineDelay')) || 1500;
        this.progressLength = options.progressLength
            || parseFloat(this.container.getAttribute('progressLength')) || 40;
        this.progressChar = options.progressChar
            || this.container.getAttribute('progressChar') || '█';
		this.progressPercent = options.progressPercent
            || parseFloat(this.container.getAttribute('progressPercent')) || 100;
        this.cursor = options.cursor
            || this.container.getAttribute('cursor') || '▋';
        this.charBeforeInput = options.charBeforeInput
            || this.container.getAttribute('charBeforeInput') || '$';
        this.loadLines()
        if (!options.noInit) this.init()
    }

    loadLines() {
        // Load all the lines and create the container so that the size is fixed
        // Otherwise it would be changing and the user viewport would be constantly
        // moving as she/he scrolls
        const fastButton = this.generateFast()
        fastButton.style.visibility = 'hidden'
        this.container.appendChild(fastButton)
        this.insertCharBeforeInput();
        // Appends dynamically loaded lines to existing line elements.
        this.lines = [...this.container.querySelectorAll(`[${this.pfx}]`)];
        for (let line of this.lines) {
            line.style.visibility = 'hidden'
            this.container.appendChild(line)
        }
        const restartButton = this.generateRestart()
        restartButton.style.visibility = 'hidden'
        this.container.appendChild(restartButton)
    }

    /**
     * Initialise the widget, get lines, clear container and start animation.
     */
    init() {
        /**
         * Calculates width and height of Termynal container.
         * If container is empty and lines are dynamically loaded, defaults to browser `auto` or CSS.
         */
        const containerStyle = getComputedStyle(this.container);
        this.container.style.width = containerStyle.width !== '0px' ?
            containerStyle.width : undefined;
        this.container.style.minHeight = containerStyle.height !== '0px' ?
            containerStyle.height : undefined;
        this.container.innerHTML = '';
        for (let line of this.lines) {
            line.style.visibility = 'visible'
        }
        this.start();
    }

    /**
     * Start the animation and render the lines depending on their data attributes.
     */
    async start() {
        this.addFastButton()
        await this.sleep(this.startDelay);

        for (let line of this.lines) {
            const type = line.getAttribute(this.pfx);
            const lineDelay = line.getAttribute('lineDelay') || this.lineDelay;

            if (type == 'input') {
                line.setAttribute('cursor', this.cursor);
                await this.typeAnimation(line);
                await this.sleep(lineDelay);
            }

            else if (type == 'progress') {
                await this.progress(line);
                await this.sleep(lineDelay);
                
            }

            else {
                this.container.appendChild(line);
                await this.sleep(lineDelay);
            }

            line.removeAttribute('cursor');
        }
        this.fastElement.style.visibility = 'hidden'
        this.lineDelay = this.originalLineDelay
        this.typeDelay = this.originalTypeDelay
        this.startDelay = this.originalStartDelay
        this.addRestart()
    }

    generateRestart() {
        const restart = document.createElement('a')
        restart.onclick = (e) => {
            e.preventDefault()
            this.init()
        }
        restart.href = ''
        restart.setAttribute('termynal-control-buttons', '')
        restart.innerHTML = "restart ↻"
        return restart
    }

    generateFast() {
        const fast = document.createElement('a')
        fast.onclick = (e) => {
            e.preventDefault()
            this.lineDelay = 0
            this.typeDelay = 0
            this.startDelay = 0
        }
        fast.href = ''
        fast.setAttribute('termynal-control-buttons', '')
        fast.innerHTML = "fast →"
        this.fastElement = fast
        return fast
    }

    addRestart() {
        const restart = this.generateRestart()
        this.container.appendChild(restart)
    }

    addFastButton() {
        const fast = this.generateFast()
        this.container.appendChild(fast)
    }

    /**
     * Animate a typed line.
     * @param {Node} line - The line element to render.
     */
    async typeAnimation(line) {
        function getAndRemoveAllText(element) {
            let textArray = [];
            // loop through all the nodes of the element
            for (let node of element.childNodes) {
                if (node.nodeType == Node.ELEMENT_NODE && node.hasAttribute("charBeforeInput")) {
                    textArray.push("");
                    continue;
                }
                textArray.push(node.textContent);
                node.textContent = "";
            }
            return textArray;
        }
        
        const delay = line.getAttribute('typeDelay') || this.typeDelay;
        let textArray = getAndRemoveAllText(line);
        this.container.appendChild(line);
        for (let i=0; i<line.childNodes.length; i++) {
            let node = line.childNodes[i];
            if (node.nodeType == Node.ELEMENT_NODE && node.hasAttribute("charBeforeInput")) {continue};
            let text = textArray[i];
            for (let char of text) {
                await this.sleep(delay)
                node.textContent += char;
            }
        }
    }

    /**
     * Animate a progress bar.
     * @param {Node} line - The line element to render.
     */
    async progress(line) {
        const progressLength = line.getAttribute('progressLength')
            || this.progressLength;
        const progressChar = line.getAttribute('progressChar')
            || this.progressChar;
        const chars = progressChar.repeat(progressLength);
		const progressPercent = line.getAttribute('progressPercent')
			|| this.progressPercent;
        line.textContent = '';
        this.container.appendChild(line);

        for (let i = 1; i < chars.length + 1; i++) {
            await this.sleep(this.typeDelay);
            const percent = Math.round(i / chars.length * 100);
            line.textContent = `${chars.slice(0, i)} ${percent}%`;
			if (percent>progressPercent) {
				break;
			}
        }
    }

    /**
     * Helper function for animation delays, called with `await`.
     * @param {number} time - Timeout, in ms.
     */
    sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    insertCharBeforeInput(selector='[data-ty="input"]') {
        this.container.querySelectorAll(selector).forEach(node => {
            node.insertAdjacentHTML("afterbegin",`<span charBeforeInput>${this.charBeforeInput} </span>`)
        })
    }
}

function createNotInitialisedTermynals() {
    let termynals = [];
    document.querySelectorAll('.termynal').forEach(termynal => termynals.push(
        new Termynal({
            container: termynal,
            options: {
                noInit:true,
            }
        })
    ));
    return termynals
}

function startVisibleTerminals(termynals) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const visibleTermynal = termynals.find( termynal => {
                return termynal.container === entry.target
            })
            if (entry.isIntersecting) {
                visibleTermynal.init();
                observer.unobserve(entry.target);
            }
        })
    },
    {
        rootMargin: "-50px",
    })
    termynals.forEach(termynal => observer.observe(termynal.container));
}

function main() {
    const terms=createNotInitialisedTermynals();
    startVisibleTerminals(terms);
}

main()
// References:
// https://github.com/tiangolo/fastapi/blob/master/docs/en/docs/js/termynal.js

