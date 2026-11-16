const languages = ['en', 'de', 'fr'];

export function loadTexts(language) {
    const code = languages.includes(language) ? language : 'en';
    return import(`./02-load-texts/${code}.js`);
}
