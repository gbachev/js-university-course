// Task 3: Keep the rows
// Lecture: DOM Manipulation
//
// addBooks(list, titles) adds a row for each title at the end of our list. It uses
// innerHTML +=, so every call rebuilds the rows that were there: a ticked checkbox is
// unticked again, and a title like <img src=x onerror=...> turns into real markup. Fix it
// with createElement(): each new li holds a label with a checkbox and the title as text,
// like the rows already on the page, and the existing rows are left alone.
//
// Examples:
//   addBooks(list, ['Persuasion', 'Neuromancer']);   // the list now has 4 rows
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/dom-manipulation/tasks/03-keep-the-rows.html

export function addBooks(list, titles) {
    for (const title of titles) {
        list.innerHTML += `<li><label><input type="checkbox"> ${title}</label></li>`;
    }
}
