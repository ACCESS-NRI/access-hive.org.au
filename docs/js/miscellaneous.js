'use strict';

// Add buttons at the top of each table column (when hovered) to sort it
function sortTables() {
  let tables = document.querySelectorAll("article table:not([class])");
  tables.forEach(table => new Tablesort(table));
}


// Remove 'Made with Material for MkDocs' from copyright
function removeMkDocs() {
  let copyright = document.querySelector(".md-copyright");
  for (let i=0; i<=copyright.childNodes.length; i++) {
    let node = copyright.childNodes[i];
    if (node?.textContent.includes('Made with') || node?.textContent.includes('Material for MkDocs')) {
      i--;
      copyright.removeChild(node);
    }
  }
}


/*
  Adjust the scrolling so that the paragraph's titles is not 
  partially covered by the sticky banner when clicking on a toc link
*/
function adjustScrollingToId() {
  let header = document.querySelector('header');
  let links = document.querySelectorAll("a[href^='#'].md-nav__link,a[href^='#']:not([class])");

  const clickEvent = e => {
      e.preventDefault();
      window.scrollTo(0, document.querySelector(e.target.hash).offsetTop - header.offsetHeight);
  }
  
  links.forEach(link => {
    link.addEventListener('click', clickEvent)
  })
}


/*
  Add functionality to tabs
*/
function tabFunctionality() {
  // Make first tab and content active 
  document.querySelectorAll(".tabLabels :nth-child(1)").forEach(label=>label.classList.add("activeTab"));
  document.querySelectorAll(".tabContents :nth-child(1)").forEach(content=>content.classList.add("activeTabContent"));
  // Add click event to tab buttons
  let tabButtons = document.querySelectorAll(".tabLabels > button");
  tabButtons.forEach(button=>{
    button.addEventListener('click', openTab);
  })
  
  function openTab(e) {
    let active = e.currentTarget;
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
  let extLinks = document.querySelectorAll("article a[target='_blank']");
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
      document.cookie = `terminalState=${state};path=${location.origin};max-age=31536000;samesite=lax`;
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
    let action = state == 'active' ? 'Disable' : 'Enable';
    terminalAnimationsSwitch.setAttribute('title',`${action} terminal animations`);
    terminalAnimationsSwitch.setAttribute('id','terminalSwitch');
    let h1 = document.querySelector('h1');
    h1.parentElement.insertBefore(terminalAnimationsSwitch, h1);
    terminalAnimationsSwitch.addEventListener('click', toggleState, false);
  }
}


// Join all functions
function main() {
  sortTables();
  removeMkDocs();
  adjustScrollingToId();
  tabFunctionality();
  addExternalLinkIcon();
  toggleTerminalAnimations();
}

// Run all functions
// window.onload = () => document$.subscribe(() => main());
document$.subscribe(() => main());