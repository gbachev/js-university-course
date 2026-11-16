// Task 2: Greet the user
// Lecture: Synchronous vs Asynchronous Code
//
// loadUser(id, onLoaded) is done: it calls onLoaded with the user after 500 ms.
// Write greetUser(id, onGreeting) on top of it. It loads the user and calls
// onGreeting with the text 'Hello, <name>!'. A function that uses an async result
// cannot return it either, so greetUser() takes a callback too. An unknown id gives
// the user { id, name: 'guest' }, so the greeting is 'Hello, guest!'.
//
// Examples:
//   greetUser(1, (text) => console.log(text));
//   // 500 ms later: Hello, Jane Doe!
//
// Run the tests: npm test -- 17-asynchronous-javascript/synchronous-vs-asynchronous

const names = { 1: 'Jane Doe', 2: 'John Doe' };

export function loadUser(id, onLoaded) {
    setTimeout(() => {
        onLoaded({ id, name: names[id] ?? 'guest' });
    }, 500);
}

export function greetUser(id, onGreeting) {
    // Your code here
}
