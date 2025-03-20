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
    let toc_items = document.querySelectorAll('[aria-label="On this page"] .md-nav__item')
    toc_items.forEach(item => {
        let parag_id = item.querySelector('a').href.split('#')[1];
        let parag = document.getElementById(parag_id)
        if (parag && parag.classList.contains('no-toc')) {
            item.style.display = 'none'
        }
    })
    console.log('TOC items hidden')
}

// Add buttons at the top of each table column (when hovered) to sort it
function sortTables() {
  let tables = document.querySelectorAll("article table:not([class])");
  tables.forEach(table => new Tablesort(table));
}

/*
  Adjust the scrolling so that the paragraph's titles is not 
  partially covered by the sticky banner when clicking on a toc link
*/
function adjustScrollingToId() {
  function scrollToId() {
    if (location.hash) {
      let el = document.getElementById(location.hash.slice(1,));
      if (el) {
        let header = document.querySelector('header');
        let offset = el.getBoundingClientRect().top - header.getBoundingClientRect().bottom;
        if (offset != 0) {
          window.scrollBy(0, offset);
        }
      }
    }
  }
  scrollToId();
  document.querySelectorAll(`[href^="#"]`).forEach(el => el.addEventListener("click",(e) => setTimeout(scrollToId,0), false));
}


/*
  Add functionality to tabs 
*/
function tabFunctionality() {
  let activeEl = document.activeElement;
  // If tab is activeElement (for example if a link points to an ID 
  // inside the tab content/button), make that tab active
  if (activeEl?.parentElement.classList.contains("tabLabels")) {
    activeEl.blur();
    openTab(activeEl);
  } else {
    // Otherwise first check if a tab was open and a page reloaded, and open the same tab, 
    // otherwise open the tab that has the .activeTab class, otherwise open the first tab
    document.querySelectorAll(".tabLabels").forEach(tabLabels => {
      let label = tabLabels.getAttribute("label");
      let tabID;
      if (sessionStorage.getItem(`tabs-label=${label}`)) {
        tabID = document.getElementById(tabID) ? sessionStorage.getItem(`tabs-label=${label}`) : tabLabels.firstElementChild.id;
      } else if (tabLabels.querySelector(".activeTab")) {
        tabID = tabLabels.querySelector(".activeTab").id;
      } else {
        tabID = tabLabels.firstElementChild.id;
      }
      openTab(document.getElementById(tabID));
    })
  }
  // Add click event to tab buttons
  let tabButtons = document.querySelectorAll(".tabLabels > button");
  tabButtons.forEach(button=>{
    button.addEventListener('click', (e) => openTab(e.currentTarget));
  })

  // Add click event for links to tab IDs
  document.querySelectorAll('[href^="#"]:not([class^="md"])').forEach(el => {
    let href = el.getAttribute('href');
    let tabEl = document.getElementById(href.slice(1,))
    if (tabEl?.parentElement.classList.contains("tabLabels")) {
      el.addEventListener("click",(e) => openTab(tabEl), false);
    }
  })
  
  function openTab(tab) {
    let label = tab.parentElement.getAttribute('label');
    let index = Array.from(tab.parentElement.children).indexOf(tab)+1;
    // Remove active classes from tabs with matching labels 
    document.querySelectorAll(`.tabLabels[label="${label}"] > .activeTab`).forEach(elem => {
      elem.classList.remove('activeTab');
    });
    // Remove active classes from contents whose none of their associated tabs IDs are activeTabs
    document.querySelectorAll('[tabcontentfor]').forEach(elem => {
      let tabcontentfor = elem.getAttribute('tabcontentfor');
      if (
        ! tabcontentfor.split(' ').some(tabID => {
          return document.getElementById(tabID).classList.contains('activeTab')
        })
      ) {
          elem.classList.remove('activeTab');
      }
    });
    // Add active classes to tab labels
    document.querySelectorAll(`.tabLabels[label=${label}] > :nth-child(${index})`)
      .forEach(button => {button.classList.add('activeTab')});
    // Add active classes to contents whose any associated tabs IDs are activeTabs
    document.querySelectorAll('[tabcontentfor]').forEach(elem => {
      let tabcontentfor = elem.getAttribute('tabcontentfor');
      if (
        tabcontentfor.split(' ').some(tabID => {
          return document.getElementById(tabID).classList.contains('activeTab')
        })
      ) {
        elem.classList.add('activeTab');
      }
    });
    // Add tab ID hash to URL
    history.pushState(null, null, `#${tab.id}`);
    // Save active tab to sessionStorage
    sessionStorage.setItem(`tabs-label=${label}`,`${tab.id}`);
  }
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
    
    function getState() {
      return localStorage.getItem('ACCESS-Hive-Docs-animated-terminal_state') || 'active';
    }
    
    function setState(state) {
      localStorage.setItem('ACCESS-Hive-Docs-animated-terminal_state', state);
    }

    function applyState() {
      let state = getState();
      let current_string = state == 'active' ? 'enabled' : 'disabled';
      let onclick_string = state == 'active' ? 'disable' : 'enable';
      document.querySelectorAll('.terminalSwitch').forEach(_switch => {
        _switch.setAttribute('src',`/assets/terminal_animation_switch_${state}.png`);
        _switch.setAttribute('title',`Terminal animations ${current_string}.\nClick to ${onclick_string} them.`);
      })
      let terminalWindows = document.querySelectorAll('terminal-window');
      if (state == 'active') {
        terminalWindows.forEach(t => {
          t.removeAttribute('static');
        })
      } else {
        terminalWindows.forEach(t => {
          t.setAttribute('static',"");
        })
      }
    }

    function toggleState(e) {
      if (getState() == 'active') {
        setState('inactive');
      } else {
        setState('active');
      }
      applyState();
    }
    
    let terminalAnimationsSwitch = document.createElement('img');
    terminalAnimationsSwitch.classList.add('terminalSwitch');
    terminalAnimationsSwitch.addEventListener('click', toggleState, false);
    let h1 = document.querySelector('h1');
    h1.parentElement.insertBefore(terminalAnimationsSwitch, h1);
    applyState();
  }
}

/*
  Add custom info box for terminal-animations at the top of the page (right after the page title)
*/
function addTerminalAnimationsInfo() {
  if (document.querySelector('terminal-window')) {
    let h1 = document.querySelector('h1');
    let infoBox = document.createElement('custom-simulated-terminal-info');
    h1.parentElement.insertBefore(infoBox, h1.nextSibling);
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
  document.querySelectorAll('.card-text-container,.fitText').forEach(el => {
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
  adjustScrollingToId();
  tabFunctionality();
  sortTables();
  makeLinksExternal();
  fitText();
  toggleTerminalAnimations();
  addTerminalAnimationsInfo();
  makeCitationLinks();
}

// Run all functions
window.onload = () => document$.subscribe(() => main());