// Good: the sources go from the most general to the most specific.
const defaults = { theme: 'light', language: 'en', fontSize: 14 };
const userSettings = { theme: 'dark', fontSize: 16 };
const overrides = { fontSize: 18 };

const final = { ...defaults, ...userSettings, ...overrides };

console.log(final); // { theme: 'dark', language: 'en', fontSize: 18 }
