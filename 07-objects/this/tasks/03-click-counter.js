// Task 3: The click counter
// Lecture: The this Keyword
//
// The "Like" button of our blog counts its clicks with a counter object: its click()
// method adds 1 to this.clicks and returns the new count. The button does not call
// counter.click() itself: it gets a function from getClickHandler(counter) and calls
// that function on its own, as handler(). Right now the handler throws, because it has
// lost its this. Fix getClickHandler so the handler always works on the counter we
// pass in: return an arrow function that calls the method on the counter.
//
// Examples:
//   const counter = createCounter();
//   const handler = getClickHandler(counter);
//   handler();         // 1
//   handler();         // 2
//   counter.clicks     // 2
//
// Run the tests: npm test -- 07-objects/this

export function createCounter() {
    return {
        clicks: 0,
        click() {
            this.clicks++;
            return this.clicks;
        },
    };
}

export function getClickHandler(counter) {
    return counter.click;
}
