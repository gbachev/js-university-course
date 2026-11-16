// Task 2: Texts from a list
// Lecture: Dynamic Loading
//
// loadTexts(language) loads the texts of the shop in one language, from the folder
// 02-load-texts/ (en.js, de.js and fr.js). It returns the promise from import(). Right
// now it builds the path straight from its input: a language we do not have makes the
// promise reject, and a value like '../02-load-texts/admin' loads a file it never
// should. Check the language against the list first: only 'en', 'de' and 'fr' reach
// the path, anything else loads the English texts.
//
// Examples:
//   (await loadTexts('de')).checkout    // 'Zur Kasse'
//   (await loadTexts('es')).checkout    // 'Checkout'
//
// Run the tests: npm test -- 12-modules/dynamic-loading

export function loadTexts(language) {
    return import(`./02-load-texts/${language}.js`);
}
