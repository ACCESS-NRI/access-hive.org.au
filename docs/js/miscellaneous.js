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
      let el = document.querySelector(location.hash);
      let offset = el.getBoundingClientRect().top - header.getBoundingClientRect().bottom;
      if (offset < 0) {
        window.scrollBy(0, offset);
      }
    }
    document.querySelectorAll(`[href="${location.hash}"].md-nav__link`).forEach(el => el.onclick = () => setTimeout(scrollToId,0));
  }
  scrollToId();
  window.onhashchange = () => scrollToId();
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
    // Otherwise make first tab and content active
    document.querySelectorAll(".tabLabels :nth-child(1)").forEach(label=>label.classList.add("activeTab"));
    document.querySelectorAll(".tabContents :nth-child(1)").forEach(content=>content.classList.add("activeTabContent"));
  }
  // Add click event to tab buttons
  let tabButtons = document.querySelectorAll(".tabLabels > button");
  tabButtons.forEach(button=>{
    button.addEventListener('click', openTab);
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
    document.querySelectorAll(`.tabContents[label=${label}]`).forEach(tabContent => {
      for (let content of tabContent.children) {
        content.classList.remove('activeTabContent');
      }
    })
    document.querySelectorAll(`.tabLabels[label=${label}]`).forEach(tabLabel => {
      for (let button of tabLabel.children) {
        button.classList.remove('activeTab');
      }
    })
    // Add active classes to button/content and add focus
    document.querySelectorAll(`.tabContents[label=${label}] :nth-child(${index})`).forEach(content => {
      content.classList.add('activeTabContent')
    })
    document.querySelectorAll(`.tabLabels[label=${label}] :nth-child(${index})`).forEach(label => {
      label.classList.add('activeTab')
    })

  }
}


/*
  Add the external-link icon to <a> tags with target="_blank"
*/
function addExternalLinkIcon() {
  let extLinks = document.querySelectorAll("article a[target='_blank']:not(:has(img))");
  extLinks.forEach(link => {
    link.classList.add('external-link');
  })
}


/*
  Add button to toggle terminal-animations for the whole page (next to the page title)
*/
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
      document.cookie = `terminalState=${state};path=/;max-age=2592000;samesite=lax`; // Expires after 1 month
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
    let rootDir;
    if (location.pathname.startsWith('/development_site')) {
      rootDir = `${location.origin}/development_site`;
    } else if (location.pathname.startsWith('/pr-preview')) {
      rootDir = `${location.origin}${location.pathname.split('/').slice(0,3).join('/')}`;
    } else {
      rootDir = location.origin;
    }
    terminalAnimationsSwitch.setAttribute('src',`${rootDir}/assets/terminal_animation_switch_${state}.png`);
    let current = state == 'active' ? 'enabled' : 'disabled';
    let onclick = state == 'active' ? 'disable' : 'enable';
    terminalAnimationsSwitch.setAttribute('title',`Terminal animations ${current}.\nClick to ${onclick} them.`);
    terminalAnimationsSwitch.setAttribute('id','terminalSwitch');
    let h1 = document.querySelector('h1');
    h1.parentElement.insertBefore(terminalAnimationsSwitch, h1);
    terminalAnimationsSwitch.addEventListener('click', toggleState, false);
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
  const coeff = 0.98;
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

// Join all functions
function main() {
  adjustScrollingToId();
  sortTables();
  removeIconsFromHomepage();
  tabFunctionality();
  addExternalLinkIcon();
  toggleTerminalAnimations();
  // addCardContainerChildrenNumber();
  fitText();
}

// Run all functions
window.onload = () => document$.subscribe(() => main());
// document$.subscribe(() => main());