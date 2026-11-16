// import works only at the top level, so we import both locales and pick one.
import * as en from './03-finish-the-migration/en.js';
import * as de from './03-finish-the-migration/de.js';

export function loadTexts(language) {
    if (language === 'de') {
        return de;
    }
    return en;
}
