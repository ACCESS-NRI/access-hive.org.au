'use strict';

/*
  Change absolute URLs for development-website and PR-previews (Move to build script)
*/
function changeAbsoluteUrls() {
  let url = window.location.href;
  if (
    url.startsWith('https://access-hive.org.au/development-website/') 
    ||
    url.startsWith('https://access-hive.org.au/pr-preview/')
  ) {
    let links = document.querySelectorAll('a[href^="/"],img[src^="/"]');
    links.forEach(link => {
      let href = link.getAttribute('href');
      let src = link.getAttribute('src');
      let base = url.startsWith('https://access-hive.org.au/development-website') ? 
        url.split('/').slice(3,4) : url.split('/').slice(3,5).join('/');
      if (href) {
        link.setAttribute('href',`/${base}${href}`);
      }
      if (src) {
        link.setAttribute('src',`/${base}${src}`);
      }
    })
  }
}

// Hide Table of Content items whose related paragraph has the 'no-toc' class
function hideTocItems() {
  document.querySelectorAll('[aria-label="On this page"] .md-nav__item').forEach(item => {
    let paragraph_id = item.querySelector('a')?.href.split('#')[1];
    let paragraph = document.getElementById(paragraph_id)
    if (paragraph?.classList.contains('no-toc')) {
      item.style.display = 'none'
    }
  });
}

// Add buttons at the top of each table column (when hovered) to sort it
function sortTables() {
    if (typeof Tablesort !== 'function') return;
    document.querySelectorAll("article table:not([class])").forEach(table => new Tablesort(table));
}

/*
  Add functionality to tabs 
*/
function tabFunctionality() {
  // === Helpers ===
  function getTabIDFromStorage(label) {
    const savedID = sessionStorage.getItem(`tabs-label=${label}`);
    return savedID && document.getElementById(savedID) ? savedID : null;
  }
  
  function getTabButtons(label) {
    return document.querySelectorAll(`.tabLabels[label="${label}"] > button`);
  }

  function getTabContents() {
    return document.querySelectorAll('[tabcontentfor]');
  }

  function getTabLabels() {
    return document.querySelectorAll('.tabLabels');
  }

  function getTabIDToOpen(tabLabels) {
    const label = tabLabels.getAttribute("label");
    return (
      getTabIDFromStorage(label) ??
      tabLabels.querySelector(".activeTab")?.id ??
      tabLabels.firstElementChild.id
    );
  }

  function isAssociatedWithActiveTab(elem) {
    const tabIDs = elem.getAttribute('tabcontentfor').split(' ');
    return tabIDs.some(tabID => {
      const tab = document.getElementById(tabID);
      return tab && tab.classList.contains('activeTab');
    });
  }

  function openTab(tab, updateURL = true) {
    const label = tab.parentElement.getAttribute('label');
    const index = Array.from(tab.parentElement.children).indexOf(tab) + 1;

    // Remove active class from current tabs in same group
    getTabButtons(label).forEach(btn => btn.classList.remove('activeTab'));

    // Remove from tab content blocks not tied to any active tab
    getTabContents().forEach(elem => {
      if (!isAssociatedWithActiveTab(elem)) {
        elem.classList.remove('activeTab');
      }
    });

    // Add active class to selected tab button
    document.querySelectorAll(`.tabLabels[label=${label}] > :nth-child(${index})`)
      .forEach(button => button.classList.add('activeTab'));

    // Add active class to associated content blocks
    getTabContents().forEach(elem => {
      if (isAssociatedWithActiveTab(elem)) {
        elem.classList.add('activeTab');
      }
    });

    // Update URL anchor and sessionStorage
    if (updateURL) {
      history.pushState(null, null, `#${tab.id}`);
    }
    // Save active tab in sessionStorage
    sessionStorage.setItem(`tabs-label=${label}`, tab.id);
  }

  // === Initial activation logic ===
  const activeEl = document.activeElement;
  if (activeEl?.parentElement.classList.contains("tabLabels")) {
    activeEl.blur();
    openTab(activeEl);
  } else {
    getTabLabels().forEach(tabLabels => {
      const tabID = getTabIDToOpen(tabLabels);
      const tab = document.getElementById(tabID);
      if (tab) openTab(tab, false);
    });
  }

  // === Add click listeners to tab buttons ===
  document.querySelectorAll(".tabLabels > button").forEach(button => {
    button.addEventListener("click", e => openTab(e.currentTarget));
  });

  // === Add listeners to anchor links pointing to tab IDs ===
  document.querySelectorAll('[href^="#"]:not([class^="md"])').forEach(el => {
    const href = el.getAttribute('href');
    const tabEl = document.getElementById(href.slice(1));
    if (tabEl?.parentElement.classList.contains("tabLabels")) {
      el.addEventListener("click", () => openTab(tabEl), false);
    }
  });
}

/*
  Make links that go to a different website 'external' by adding the
  target="_blank" attribute, and add an external-link icon to them.
*/
function makeLinksExternal() {
  // Links to be opened in a new tab
  document.querySelectorAll("a[href^='http']:not([href^='https://access-hive.org.au'])")
    .forEach(link => {
      link.setAttribute('target','_blank');
    });
  // Add external link icon only to some external links
  document.querySelectorAll("article a[href^='http']:not([href^='https://access-hive.org.au']):not(:is(.vertical-card,.horizontal-card,.text-card))")
    .forEach(link => {
      link.classList.add('external-link');
    });
}


/*
  Add button to toggle terminal-animations for the whole page (next to the page title)
*/
function toggleTerminalAnimations() {
    if (document.querySelector('terminal-window')) {
        const COOKIE_TEXT = 'ACCESS-Hive-Docs-animated-terminal-state';
        const SWITCH_IMG = '/assets/terminal_animation_switch.png';
        const SWITCH_IMG_INACTIVE = '/assets/terminal_animation_switch_inactive.png';
        
        function getState() {
            return localStorage.getItem(COOKIE_TEXT) || 'active';
        }

        function setStateCookie(state) {
            localStorage.setItem(COOKIE_TEXT, state);
        }
        
        function setSwitchIcon(element, state) {
            if (state === 'active') {
                element.classList.add('hidden');
            } else {
                element.classList.remove('hidden');
            }
        }
        
        function applyStateToTerminalWindows(state) {
            let terminalWindows = document.querySelectorAll('terminal-window');
            if (state === 'active') {
                terminalWindows.forEach(t => {
                    t.removeAttribute('static');
                })
            } else {
                terminalWindows.forEach(t => {
                    t.setAttribute('static',"");
                })
            }
        }

        function applyState(container, state) {
            // Change the switch icon and title            
            setSwitchIcon(container.children[1], state);
            setSwitchTooltipText(container.querySelector('.terminal-switch-tooltip'), state);
            // Apply the state to terminal windows
            applyStateToTerminalWindows(state);
        }
        
        function setSwitchTooltipText(element, state) {
            let word = state === 'active' ? 'disable' : 'enable';
            element.innerHTML = `
            Terminal animations are <b>${state}</b>. Click to ${word} them.<br><br>
            In this documentation, the same code is sometimes shown in a <b>code block</b> 
            and also as a <b>terminal animation</b>.<br>
            The <b>code blocks</b> show the commands to be run in a terminal. They can be easily copied
            by clicking on the icon over the right side of the code block.<br>
            The <b>terminal animations</b> are produced using 
            <a href="https://github.com/atteggiani/animated-terminal.js" target="_blank" rel="noopener noreferrer" 
                class="external-link">animated-terminal.js</a>
            and provide examples of the output to expect when the commands are run. 
            Sometimes they might slightly differ from the actual outputs.
            `
        }

        function toggleState(event) {
            const newstate = getState() === 'active' ? 'inactive' : 'active';
            applyState(event.currentTarget, newstate);
            setStateCookie(newstate);
        }

        // Create the Animation switch
        const terminalAnimationsSwitch = document.createElement('img');
        terminalAnimationsSwitch.setAttribute('src',SWITCH_IMG);
        terminalAnimationsSwitch.classList.add('terminal-switch');
        const terminalAnimationsSwitchInactive = document.createElement('img');
        terminalAnimationsSwitchInactive.classList.add('terminal-switch');
        terminalAnimationsSwitchInactive.setAttribute('src',SWITCH_IMG_INACTIVE);
        // Create the Animation Switch tooltip
        const terminalAnimationsTooltip = document.createElement('div');
        terminalAnimationsTooltip.classList.add('terminal-switch-tooltip');
        terminalAnimationsTooltip.addEventListener("mouseenter", (event) => {
            terminalAnimationsTooltip.classList.add('visible');
        });
        terminalAnimationsTooltip.addEventListener("mouseleave", (event) => {
            terminalAnimationsTooltip.classList.remove('visible');
        });
        // Create the Animation Switch Container
        const terminalAnimationsSwitchContainer = document.createElement('div');
        terminalAnimationsSwitchContainer.classList.add('terminal-switch-container');
        terminalAnimationsSwitchContainer.appendChild(terminalAnimationsSwitch);
        terminalAnimationsSwitchContainer.appendChild(terminalAnimationsSwitchInactive);
        terminalAnimationsSwitchContainer.appendChild(terminalAnimationsTooltip);
        terminalAnimationsSwitchContainer.addEventListener('click', toggleState, false);
        let state = getState();
        applyState(terminalAnimationsSwitchContainer, state);
        // Place the Animation switch within the document
        const h1 = document.querySelector('h1');
        h1.parentElement.insertBefore(terminalAnimationsSwitchContainer, h1);
    }
}

/*
  Fit text to div if overflowing (for 'card-text-container' and 'fitText' class)
*/
function fitText() {
  const coeff = 0.9;
  function isOverflowing(el) {
    return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
  }
  function fit(el) {
    el.style.fontSize = null;
    while (isOverflowing(el)) {
      el.style.fontSize = `${parseFloat(getComputedStyle(el).fontSize) * coeff}px`;
    }
  }
  const observer = new ResizeObserver(entries => {
    entries.forEach(entry => fit(entry.target));
  })
  document.querySelectorAll('.card-text-container,.fit-text').forEach(el => {
    observer.observe(el);
  })
}


/*
  Make footnote citations link to article
*/
function makeCitationLinks() {
  let match;
  let href;
  document.querySelectorAll('.footnote [id^="fn:"] > p').forEach(el => {
    if (match = el.innerHTML.match('<a\\s*href="https://doi.org/[\\w\./-]*')) { // Assignment to variable NOT AN ERROR!
      href = match[0].slice(9,);
      el.outerHTML = `<a href="${href}" target="_blank">${el.innerHTML}</a>`;
    } else if (match = el.innerHTML.match('URL: <a href="[\\w\./:-]*')) {
      href = match[0].slice(14,);
      el.outerHTML = `<a href="${href}" target="_blank">${el.innerHTML}</a>`;
    }
  })
}

// Join all functions
function main() {
  changeAbsoluteUrls();
  hideTocItems();
  tabFunctionality();
  sortTables();
  makeLinksExternal();
  fitText();
  toggleTerminalAnimations();
  makeCitationLinks();
}

// Run all functions after every navigation event
if (typeof document$ !== 'undefined') {
    // The `document$` is a special observable enabled by the navigation.instant plugin (in mkdocs.yaml)
    document$.subscribe(() => main());
} else {
    // If navigation.instant plugin is not active
    window.addEventListener('load', main);
}