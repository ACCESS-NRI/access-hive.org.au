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


// Join all functions
function main() {
  sortTables();
  removeMkDocs();
  adjustScrollingToId();
  tabFunctionality();
  addExternalLinkIcon();
}

// Run all functions
// window.onload = () => document$.subscribe(() => main());
document$.subscribe(() => main());