// The browser adds the tbody our markup leaves out.
const table = document.body.firstChild;
console.log(table.firstChild.nodeName); // TBODY
