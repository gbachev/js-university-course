// Task 1: Load the size guide on demand
// Lecture: Dynamic Loading
//
// Few visitors open the size guide, yet the static import below loads it for everyone,
// as soon as this file is imported. Rewrite openSizeGuide() with import(), so
// 01-size-guide-on-demand/size-guide.js loads only when openSizeGuide() is first
// called. openSizeGuide() returns a promise of the text from sizeGuideText().
// .then() and .catch() return a new promise that gives whatever our function returns,
// so we return import(...).then(...). A second
// call must not load or run the size guide again. The tests read the list in
// 01-size-guide-on-demand/log.js to see when the size guide runs.
//
// Examples:
//   await openSizeGuide()   // 'S: 36-38, M: 40-42, L: 44-46'
//
// Run the tests: npm test -- 12-modules/dynamic-loading

import { sizeGuideText } from './01-size-guide-on-demand/size-guide.js';

export function openSizeGuide() {
    return sizeGuideText();
}
