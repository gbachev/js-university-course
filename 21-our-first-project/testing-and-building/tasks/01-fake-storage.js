// Task 1: A fuller fake storage
// Lecture: Testing and Building
//
// The project's fakeStorage() has only getItem() and setItem(). A test for a migration
// or a "Clear list" button needs more of localStorage. Grow it: fakeStorage(saved)
// returns an object with getItem(), setItem(), removeItem(), clear() and a length
// property. Like localStorage, getItem() gives null for a missing key, setItem() stores
// the value as a string, and length counts the keys. saved fills it at the start, and
// changing the fake never changes the saved object we passed in.
//
// Examples:
//   const storage = fakeStorage({ 'reading-list:v1': '[]' });
//   storage.length                     // 1
//   storage.setItem('count', 5);
//   storage.getItem('count')           // '5'
//   storage.removeItem('count');
//   storage.getItem('count')           // null
//
// Run the tests: npm test -- 21-our-first-project/testing-and-building

// Copied from reading-list/tests/storage.test.js, with export added for the tests.
// A stand-in for localStorage: same two methods, backed by a plain object.
export function fakeStorage(saved = {}) {
    const data = { ...saved };
    return {
        getItem: (key) => (key in data ? data[key] : null),
        setItem: (key, value) => {
            data[key] = String(value);
        },
    };
}
