// Task 3: Finish the migration
// Lecture: CommonJS
//
// The shop is moving from CommonJS to ES modules. The locale files in
// 03-finish-the-migration/ are already ES modules, and this file already uses export,
// but loadTexts(language) still calls require(), which does not exist in an ES module:
// it throws a ReferenceError. Rewrite it with import. loadTexts('de') returns the
// German texts, any other language the English ones. Every call for the same language
// returns the same object, as the module cache did with require().
//
// Examples:
//   loadTexts('de').checkout    // 'Zur Kasse'
//   loadTexts('en').checkout    // 'Checkout'
//   loadTexts('fr').checkout    // 'Checkout'
//
// Run the tests: npm test -- 12-modules/commonjs

export function loadTexts(language) {
    if (language === 'de') {
        return require('./03-finish-the-migration/de.js');
    }
    return require('./03-finish-the-migration/en.js');
}
