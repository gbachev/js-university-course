# 18. DOM and DOM Operations

The page as a tree of objects: finding elements, changing them safely and fast, shadow DOM, observers, and saving data in the browser with Web Storage.

This is the first section where most code runs in the browser. Pages that load modules do not work from `file://`, so we run `npm run serve` from the repository folder and open the pages from the address it prints. A browser task is a page with our code in a `.js` file next to it: the page runs checks on our code and lists them at the bottom, and `?solutions` at the end of the address runs them against the solution.

1. Section Overview (no code)
2. [What is the DOM](what-is-dom) - the tree of nodes the browser builds from our HTML, and where scripts run
3. [Web APIs vs JavaScript](webapi-vs-js) - what the language gives us and what the host adds, and feature detection
4. [How to Select Elements](selecting-elements) - `querySelector()`, live and static collections, `closest()`, walking the tree and `dataset`
5. [DOM Manipulation](dom-manipulation) - create, insert, move and remove elements, `textContent` vs `innerHTML`, `classList` and templates
6. [DOM Performance Tips (Reflows, Repaints, DocumentFragment)](dom-performance) - forced layouts, read all then write all, `DocumentFragment` and `requestAnimationFrame()`
7. [Shadow DOM](shadow-dom) - shadow roots, styles that stay inside, custom elements and slots
8. [MutationObserver & IntersectionObserver](observers) - react to DOM changes and to what the user can see
9. [Web Storage (localStorage, sessionStorage)](web-storage) - save strings and JSON in the browser, and load them safely
10. [Best Practices](best-practices) - safe and fast habits for DOM code
11. Section Review (no code)
