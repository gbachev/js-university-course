// Task 4: Names on the page
// Lecture: Transforming Arrays
//
// A first look at the page: write renderNames(names, list), which shows every name of the
// array as an item of the list on the page, in the same order, and returns how many items
// it added. list is the empty <ul id="team"> of the page. The DOM gets a section of its own
// (18); for now three tools are enough:
//
//   document.createElement('li')   // a new, empty list item
//   item.textContent = 'Ada'       // the text of the item
//   list.append(item)              // puts the item at the end of the list
//
// map() turns each name into an item, and forEach() appends them one by one. Use
// textContent, so a name like '<b>Max</b>' shows as text and does not become bold. An
// empty array adds nothing and returns 0.
//
// Examples:
//   renderNames(['Ada', 'Linus'], list)   // 2, the list shows Ada and Linus
//   renderNames([], list)                 // 0, the list stays empty
//
// Open the page: run npm run serve, then open
//   08-arrays-and-keyed-collections/transforming/tasks/04-render-names.html

export function renderNames(names, list) {
    // Your code here
}
