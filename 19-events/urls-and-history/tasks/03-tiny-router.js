// Task 3: A tiny router
// Lecture: URLs and the History API
//
// The page has a nav with three links (Home, Books, About) and an empty <main id="view">.
// Write startRouter(view), which turns the page into a tiny single-page app:
// - it shows the title of the current address in view, as text, right away;
// - a click on a nav link changes the address with history.pushState() instead of
//   loading a new page, then shows the new title; a click on the link of the page we
//   are on adds no history entry;
// - Back and Forward (the popstate event) show the title of the address we land on.
// titleFor(pathname) is written: it gives the title of the nav link with that path,
// or 'Not Found'.
//
// Examples:
//   a click on Books   // the address ends in /books, view shows "Books", no reload
//   history.back()     // view shows "Home" again
//
// Open the page: run npm run serve, then open
//   19-events/urls-and-history/tasks/03-tiny-router.html

export function titleFor(pathname) {
    const link = [...document.querySelectorAll('nav a')].find(
        (a) => a.pathname === pathname
    );
    return link ? link.textContent : 'Not Found';
}

export function startRouter(view) {
    // Your code here
}
