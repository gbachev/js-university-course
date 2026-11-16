// Task 2: Where does the setting come from?
// Lecture: Prototype
//
// A support screen shows, next to every setting, whether the user changed it. Write
// settingSource(settings, key). It returns 'custom' when key is an own property of
// settings (hasOwnProperty), 'default' when the value is found further up the chain,
// and 'missing' when the key is nowhere in the chain. A custom value of false or 0 is
// still 'custom'.
//
// Examples:
//   const defaults = { theme: 'light', language: 'en' };
//   const settings = Object.setPrototypeOf({ theme: 'dark' }, defaults);
//   settingSource(settings, 'theme')      // 'custom'
//   settingSource(settings, 'language')   // 'default'
//   settingSource(settings, 'fontSize')   // 'missing'
//
// Run the tests: npm test -- 13-inheritance-and-prototype/prototype

export function settingSource(settings, key) {
    // Your code here
}
