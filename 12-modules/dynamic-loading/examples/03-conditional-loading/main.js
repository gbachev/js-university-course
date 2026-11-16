// Run with: node 12-modules/dynamic-loading/examples/03-conditional-loading/main.js
const languages = ['en', 'de'];

// Only a code from our list reaches the path.
function loadTexts(language) {
    const code = languages.includes(language) ? language : 'en';
    return import(`./locales/${code}.js`);
}

const de = await loadTexts('de');
console.log(de.checkout); // Zur Kasse

const fr = await loadTexts('fr');
console.log(fr.checkout); // Checkout

// The module cache: the same file gives the same namespace object.
const again = await loadTexts('de');
console.log(again === de); // true
