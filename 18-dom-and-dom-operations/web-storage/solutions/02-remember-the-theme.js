export function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

export function loadTheme() {
    const theme = localStorage.getItem('theme');
    return theme === 'dark' || theme === 'light' ? theme : 'light';
}
