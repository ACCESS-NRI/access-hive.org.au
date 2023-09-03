'use strict';

// Add buttons at the top of each table column (when hovered) to sort it
function sortTables() {
  let tables = document.querySelectorAll("article table:not([class])");
  tables.forEach(table => new Tablesort(table));
}

/*
  Remove 'edit' and 'view' icons from homepage
*/
function removeIconsFromHomepage() {
  if (location.pathname.match('^(/|/development_site/|/pr-preview/pr-[0-9]*/)$')) {
    let icons=document.querySelectorAll(".md-content__button.md-icon");
    icons.forEach(icon=>icon.style.display="none");
  }
}

/*
  Adjust the scrolling so that the paragraph's titles is not 
  partially covered by the sticky banner when clicking on a toc link
*/
function adjustScrollingToId() {
  function scrollToId() {
    if (location.hash) {
      let header = document.querySelector('header');
      let el = document.getElementById(location.hash.slice(1,));
      let offset = el.getBoundingClientRect().top - header.getBoundingClientRect().bottom;
      if (offset != 0) {
        window.scrollBy(0, offset);
      }
    }
  }
  document.querySelectorAll(`[href^="#"]`).forEach(el => el.addEventListener("click",(e) => setTimeout(scrollToId,0), false));
  scrollToId();
}


/*
  Add functionality to tabs
*/
function tabFunctionality() {
  let activeEl = document.activeElement;
  // If tab is activeElement (for example if a link points to an ID 
  // inside the tab content/button), make that tab active
  if (activeEl.parentElement.classList.contains("tabLabels")) {
    activeEl.blur();
    openTab(activeEl);
  } else {
    // Otherwise first check if a tab was open and a page reloaded, and open the same tab, 
    // otherwise open first tab
    document.querySelectorAll(".tabLabels").forEach(tabs => {
      let label = tabs.getAttribute("label");
      let index;
      if (sessionStorage.getItem(`tabs-label=${label}`)) {
        index = sessionStorage.getItem(`tabs-label=${label}`);
      } else {
        index = '1';
      }
      // tabs.querySelector(`:nth-child(${index})`).classList.add("activeTab");
      // document.querySelectorAll(`.tabContents[label="${label}"] > :nth-child(${index})`).forEach(content => content.classList.add("activeTabContent"));
      openTab(tabs.querySelector(`:nth-child(${index})`));
    })
  }
  // Add click event to tab buttons
  let tabButtons = document.querySelectorAll(".tabLabels > button");
  tabButtons.forEach(button=>{
    button.addEventListener('click', openTab);
  })

  // Add click event for links to tab IDs on the same page
  document.querySelectorAll('[href^="#"]:not([class^="md"])').forEach(el => {
    let href = el.getAttribute('href');
    let tabEl = document.getElementById(href.slice(1,))
    if (tabEl.parentElement.classList.contains("tabLabels")) {
      el.addEventListener("click",(e) => openTab(tabEl), false);
    }
  })
  
  function openTab(e) {
    let active;
    if (e.currentTarget) {
      active = e.currentTarget;
    } else {
      active = e;
    }
    let label = active.parentElement.getAttribute('label');
    let index = Array.from(active.parentElement.children).indexOf(active)+1;
    // Remove active classes from button/content
    document.querySelectorAll(`.tabContents[label=${label}] > .activeTabContent`).forEach(content => {
      content.classList.remove('activeTabContent');
    })
    document.querySelectorAll(`.tabLabels[label=${label}] > .activeTab`).forEach(button => {
      button.classList.remove('activeTab');
    })
    // Add active classes to button/content and add focus
    document.querySelectorAll(`.tabContents[label=${label}] > :nth-child(${index})`).forEach(content => {
      content.classList.add('activeTabContent');
    })
    document.querySelectorAll(`.tabLabels[label=${label}] > :nth-child(${index})`).forEach(button => {
      button.classList.add('activeTab');
    })
    sessionStorage.setItem(`tabs-label=${label}`,`${index}`);
  }
}


/*
  Add the external-link icon to <a> tags with target="_blank"
*/
function addExternalLinkIcon() {
  let extLinks = document.querySelectorAll("article a[target='_blank']:not(:is(.vertical-card,.horizontal-card))");
  extLinks.forEach(link => {
    link.classList.add('external-link');
  })
}


/*
  Add button to toggle terminal-animations for the whole page (next to the page title)
*/
// Change it to be using "localStorage" once animated-terminal.js has been updated to set/remove "static" attribute dynamically.
function toggleTerminalAnimations() {
  if (document.querySelector('terminal-window')) {
    let state;

    function applyState() {
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
    
    function getCookie() {
      let cvalue = document.cookie.split(';')
      .find(c => c.trim().startsWith('terminalState='))
      ?.split("=")[1];
      return cvalue;
    }

    function setCookie() {
      document.cookie = `terminalState=${state};path=/;max-age=604800;samesite=lax`; // Expires after 1 week
    }

    function toggleState(e) {
      if (state == 'active') {
        state='inactive'
      } else {
        state='active'
      }
      setCookie();
      location.reload();
    }
    
    let terminalStateCookie = getCookie();
    if (! terminalStateCookie) {
      state = 'active';
      setCookie();
    } else {
      state = terminalStateCookie;
    }
    applyState();
    let terminalAnimationsSwitch = document.createElement('img');
    terminalAnimationsSwitch.setAttribute('src',`/assets/terminal_animation_switch_${state}.png`);
    let current = state == 'active' ? 'enabled' : 'disabled';
    let onclick = state == 'active' ? 'disable' : 'enable';
    terminalAnimationsSwitch.setAttribute('title',`Terminal animations ${current}.\nClick to ${onclick} them.`);
    terminalAnimationsSwitch.setAttribute('id','terminalSwitch');
    document.querySelectorAll('h1').forEach(h1 => {
      let _switch = terminalAnimationsSwitch.cloneNode(true);
      _switch.addEventListener('click', toggleState, false);
      h1.parentElement.insertBefore(_switch, h1);
    })
    terminalAnimationsSwitch.remove();
  }
}

/*
  Add style equals to number of children to all card containers, used for styling the card gaps in CSS
*/
function addCardContainerChildrenNumber() {
  document.querySelectorAll(".card-container").forEach(container => {
    container.setAttribute("style",`--num-children: ${container.childElementCount}`);
  })
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
  adjustScrollingToId();
  tabFunctionality();
  sortTables();
  removeIconsFromHomepage();
  addExternalLinkIcon();
  fitText();
  toggleTerminalAnimations();
  makeCitationLinks();
  // addCardContainerChildrenNumber();
}

// Run all functions
window.onload = () => document$.subscribe(() => main());