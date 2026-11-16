// Top-level await works in ES modules. The package.json of this repository makes every
// .js file a module, so we need no .mjs here.
function loadSettings() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ currency: 'EUR' }), 200);
    });
}

const settings = await loadSettings();
console.log(settings.currency); // EUR
