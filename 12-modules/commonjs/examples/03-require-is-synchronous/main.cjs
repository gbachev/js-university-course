// Run with: node 12-modules/commonjs/examples/03-require-is-synchronous/main.cjs
// require() is an ordinary function call, so it works inside an if.
function loadTexts(language) {
    if (language === 'de') {
        return require('./locales/de.cjs');
    }
    return require('./locales/en.cjs');
}

console.log(loadTexts('de').checkout); // Zur Kasse
console.log(loadTexts('fr').checkout); // Checkout
