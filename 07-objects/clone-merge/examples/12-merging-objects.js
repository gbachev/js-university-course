// Merging with Object.assign() and with spread: later sources win.
let defaults = { theme: 'dark', language: 'en' };
let userPrefs = { language: 'fr' };

// Each way sits in its own { } block, so both can keep the name settings.
{
    let settings = Object.assign({}, defaults, userPrefs);
    console.log(settings); // { theme: 'dark', language: 'fr' }
}

{
    // Using spread
    let settings = { ...defaults, ...userPrefs };
    console.log(settings); // { theme: 'dark', language: 'fr' }
}
