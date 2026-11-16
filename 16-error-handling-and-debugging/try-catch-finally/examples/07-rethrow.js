// We handle the error we planned for and rethrow the rest.
function loadTheme(text) {
    try {
        const settings = JSON.parse(text);
        return settings.display.theme;
    } catch (error) {
        if (error.name === 'SyntaxError') {
            return 'light';
        }
        throw error;
    }
}

try {
    console.log(loadTheme('{"display":{"theme":"dark"}}')); // dark
    console.log(loadTheme('{broken')); // light
    console.log(loadTheme('{"theme":"dark"}')); // never runs
} catch (error) {
    console.log(`Unexpected ${error.name}`); // Unexpected TypeError
}
