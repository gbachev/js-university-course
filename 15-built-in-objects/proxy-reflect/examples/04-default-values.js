// A get trap falls back to the defaults, and a has trap makes `in` agree with it.
const defaults = { theme: 'light', fontSize: 16, language: 'en' };
const saved = { theme: 'dark' };

const prefs = new Proxy(saved, {
    get(target, prop, receiver) {
        if (Object.hasOwn(target, prop)) {
            return Reflect.get(target, prop, receiver);
        }
        return defaults[prop];
    },
    has(target, prop) {
        return Object.hasOwn(target, prop) || Object.hasOwn(defaults, prop);
    },
});

console.log(prefs.theme); // dark
console.log(prefs.fontSize); // 16
console.log('language' in prefs); // true
console.log(Object.keys(prefs)); // [ 'theme' ]

delete prefs.theme;
console.log(prefs.theme); // light
