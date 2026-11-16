// try...catch gives us a safe default when the text is broken.
function readSettings(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return { theme: 'light' };
    }
}

console.log(readSettings('{"theme":"dark"}')); // { theme: 'dark' }
console.log(readSettings('{theme: dark}')); // { theme: 'light' }
