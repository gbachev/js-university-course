// Run with: node 12-modules/best-practices/examples/08-import-path-from-a-list/main.js
const languages = ['en', 'de'];

function loadTexts(language) {
    // considered bad practice: import(`./locales/${language}.js`)
    // better: only a code from our list reaches the path
    const code = languages.includes(language) ? language : 'en';
    return import(`./locales/${code}.js`);
}

const texts = await loadTexts('../admin/settings');
console.log(texts.checkout); // Checkout
