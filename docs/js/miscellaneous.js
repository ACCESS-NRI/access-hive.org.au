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

function main() {
  sortTables();
  removeMkDocs();
}

window.onload = () => document$.subscribe(() => main());