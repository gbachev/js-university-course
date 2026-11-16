import { check, equal, source } from '/lib/browser-check.js';

const { saveTheme, loadTheme } = await import(source('02-remember-the-theme.js'));

check('a first visit gets the light theme', () => {
    localStorage.removeItem('theme');
    equal(loadTheme(), 'light');
});

check('a saved theme is stored under the key theme', () => {
    saveTheme('dark');
    equal(localStorage.getItem('theme'), 'dark');
});

check('the saved theme comes back', () => {
    saveTheme('dark');
    equal(loadTheme(), 'dark');
    saveTheme('light');
    equal(loadTheme(), 'light');
});

check('a value edited by hand falls back to light', () => {
    localStorage.setItem('theme', 'purple');
    equal(loadTheme(), 'light');
    localStorage.removeItem('theme');
});
