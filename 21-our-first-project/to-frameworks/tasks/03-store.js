// Task 3: A store with subscribers
// Lecture: From Vanilla JavaScript to Frameworks
//
// In Proxy and Reflect our store called one render function on every change. Vue
// lets many parts of the page listen. Write createStore(initialState) that returns
// { state, subscribe }. state is a Proxy of initialState: writing a property, like
// state.query = 'dune', saves the value and then calls every subscriber with
// (state, property). Writing the same value again calls no one (compare with
// Object.is). subscribe(listener) adds a listener and returns a function that
// removes it again.
//
// Examples:
//   const { state, subscribe } = createStore({ query: '', page: 1 });
//   const stop = subscribe((current, prop) => console.log(prop, current[prop]));
//   state.query = 'dune';   // query dune
//   state.query = 'dune';   // nothing, the value did not change
//   stop();
//   state.page = 2;         // nothing, no one listens
//
// Run the tests: npm test -- 21-our-first-project/to-frameworks

export function createStore(initialState) {
    // Your code here
}
