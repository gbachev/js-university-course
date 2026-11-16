// When we spread several objects, the later ones win.
let defaults = { theme: 'dark', language: 'en' };
let userPrefs = { language: 'fr' };

let settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: 'dark', language: 'fr' }
