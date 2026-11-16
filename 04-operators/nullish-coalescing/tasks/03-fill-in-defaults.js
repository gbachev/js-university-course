// Task 3: Fill in the defaults
// Lecture: Nullish Coalescing
//
// Before we use the settings of a user, we fill in what is missing. Write
// applyDefaults(settings): it changes the settings object it gets and returns it. A
// missing volume becomes 50 and missing showTips becomes true, but a volume of 0 and
// showTips set to false are the user's choice and stay. The nickname is different: an
// empty nickname is as good as none, so both a missing and an empty nickname become
// 'Guest'. Pick the right assignment operator for each setting.
//
// Examples:
//   applyDefaults({})
//   // { volume: 50, showTips: true, nickname: 'Guest' }
//   applyDefaults({ volume: 0, showTips: false, nickname: '' })
//   // { volume: 0, showTips: false, nickname: 'Guest' }
//
// Run the tests: npm test -- 04-operators/nullish-coalescing

export function applyDefaults(settings) {
    // Your code here
    return settings;
}
