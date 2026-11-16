// Task 3: Compact mode
// Lecture: DOM Performance: Reflows, Repaints and DocumentFragment
//
// setCompact(list, compact) switches our list between the normal and the compact look.
// It sets two style properties on every row. The compact look is already in the CSS of
// the page, under .compact li. Change setCompact() so it only adds the compact class to
// the list when compact is true and removes it when it is false. The rows keep no inline
// styles, and the list looks the same as before.
//
// Examples:
//   setCompact(list, true)    // the rows use 14px text
//   setCompact(list, false)   // back to 16px
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/dom-performance/tasks/03-compact-mode.html

export function setCompact(list, compact) {
    for (const row of list.children) {
        row.style.padding = compact ? '2px' : '';
        row.style.fontSize = compact ? '14px' : '';
    }
}
