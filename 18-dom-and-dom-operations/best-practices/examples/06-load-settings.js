// Load stored settings through one function with defaults.
localStorage.removeItem('settings'); // start like a first visit

const defaults = { theme: 'light', fontSize: 16 };

function loadSettings() {
    try {
        const saved = JSON.parse(localStorage.getItem('settings'));
        return { ...defaults, ...saved };
    } catch {
        return { ...defaults };
    }
}

console.log(loadSettings().theme); // light

localStorage.setItem('settings', JSON.stringify({ theme: 'dark' }));
console.log(loadSettings().theme); // dark
console.log(loadSettings().fontSize); // 16

localStorage.setItem('settings', '{broken');
console.log(loadSettings().theme); // light
