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
  let links = document.querySelectorAll("a[href^='#'].md-nav__link");

  function adjustClick() {
    links.forEach(link => link.addEventListener('click', e => {
      e.preventDefault();
      let offset = header.offsetHeight
      window.scrollTo(0, document.querySelector(link.hash).offsetTop - offset);
    }))
  }
  
  let observer = new ResizeObserver(entries => adjustClick());
  
  adjustClick();
  observer.observe(header);
}

// Join all functions
function main() {
  sortTables();
  removeMkDocs();
  adjustScrollingToId();
}

// Run all functions
window.onload = () => document$.subscribe(() => main());