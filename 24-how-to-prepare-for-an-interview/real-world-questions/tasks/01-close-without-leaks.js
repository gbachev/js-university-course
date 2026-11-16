// Task 1: Close without leaks
// Lecture: Real-world Questions
//
// "Our single-page app gets slower the longer it is open." Here is one of the
// reasons. openOrdersView(win, render) opens the orders view: every second it calls
// render('refresh'), and on every 'resize' event of win it calls render('layout').
// It returns close(), which the router calls when we leave the view. Right now close()
// does nothing, so every visit leaves a timer and a listener behind. Fix close() so it
// stops the timer and removes the listener. Calling close() twice does no harm.
//
// Examples:
//   const close = openOrdersView(window, console.log);
//   // every second: refresh, and on resize: layout
//   close();
//   // nothing more, however long the page stays open
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/real-world-questions

export function openOrdersView(win, render) {
    setInterval(() => render('refresh'), 1000);
    win.addEventListener('resize', () => render('layout'));

    return function close() {
        // Your code here
    };
}
