// Task 1: Strict settings
// Lecture: Proxy and Reflect
//
// The settings page stores its values in a plain object, and a typo like
// settings.fontSzie = 20 silently adds a new key. Write strictSettings(settings),
// which returns a proxy with a set trap. Writing a key the object does not have as
// its own (toString from the prototype is not a setting) throws a TypeError with
// the message 'Unknown setting: <key>'. Writing a value of another type than the
// current one (compare with typeof) throws a TypeError with the message
// '<key> must be a <type>' ('an object' for an object). Valid writes reach the
// original object, and reads work as before.
//
// Examples:
//   const settings = strictSettings({ theme: 'light', fontSize: 16 });
//   settings.fontSize = 18;         // stored
//   settings.fontSize = '18';       // TypeError: fontSize must be a number
//   settings.fontSzie = 18;         // TypeError: Unknown setting: fontSzie
//
// Run the tests: npm test -- 15-built-in-objects/proxy-reflect

export function strictSettings(settings) {
    // Your code here
}
