'use strict';

// Create an HTML tag to render the not-supported danger admonition
class NotSupported extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<details class="not-supported" open="open">
        <summary>NOT directly supported by ACCESS-NRI</summary>
        <p>
        The information below can be useful for the ACCESS community, 
        but is not directly supported by ACCESS-NRI unless stated otherwise.
        </p>
        </details>
        `
    }
}

// Create an HTML tag to render the simulated terminal info admonition
class SimulatedTerminalInfo extends HTMLElement {
    constructor() {
        super();  
    }

    connectedCallback() {
        this.innerHTML = `<div class="admonition info">
        In this documentation, the same code is sometimes shown in a highlighted code-block 
        and also in a simulated terminal.<br>
        The <b>code-blocks</b> show the commands to be run in a terminal. They can be easily copied
        by clicking on the icon over the right side of the code block.<br>
        The <b>simulated terminals</b> are examples of the output to expect when the commands are
        run. Sometimes they might slightly differ from the real outputs.
        </div>`
    }
}

// Create an HTML tag to render the references
class References extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let inner = this.innerHTML.split("\n")
        let ul = document.createElement("ul")
        inner.forEach((item) => {
            item = item.trim()
            if (item != "") {
                let li = document.createElement("li")
                item.startsWith('- ') ? li.innerHTML = item.slice(2) : li.innerHTML = item
                ul.appendChild(li)
            }
        })
        this.innerHTML = `<hr>
        <h6>References</h6>
        <div class="references">
            ${ul.outerHTML}
        </div>
        `
    }
}

customElements.define("custom-not-supported", NotSupported)
customElements.define("custom-simulated-terminal-info", SimulatedTerminalInfo)
customElements.define("custom-references", References)