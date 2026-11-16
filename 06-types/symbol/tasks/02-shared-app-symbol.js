// Task 2: A shared app symbol
// Lecture: Symbol
//
// Different files of our app need the same symbol for the same name, so the cart in
// one file and the checkout in another can use one key. appSymbol(name) should
// return the shared symbol of the global Symbol registry for the key 'app.' + name,
// but it creates a new symbol on every call, so two calls with the same name give
// two different symbols. Fix it: the same name gives the same symbol, different
// names give different ones, and Symbol.keyFor() finds the key 'app.' + name.
//
// Examples:
//   appSymbol('cart') === appSymbol('cart')       // true
//   appSymbol('cart') === appSymbol('checkout')   // false
//   Symbol.keyFor(appSymbol('cart'))              // 'app.cart'
//
// Run the tests: npm test -- 06-types/symbol

export function appSymbol(name) {
    return Symbol('app.' + name);
}
