// Task 2: Changed settings
// Lecture: Object Properties and Methods
//
// Every user's settings object is created with Object.create(defaultSettings), so it
// inherits the defaults and holds as own properties only the settings the user changed.
// countChangedSettings(settings) should return how many settings the user changed, but
// it counts the defaults too. Fix it, keeping the for...in loop: only own properties
// count. A user who changed nothing has 0.
//
// Examples:
//   const settings = Object.create(defaultSettings);
//   settings.theme = 'dark';
//   countChangedSettings(settings)   // 1
//
// Run the tests: npm test -- 07-objects/properties-methods

export const defaultSettings = {
    theme: 'light',
    language: 'en',
    notifications: true,
};

export function countChangedSettings(settings) {
    let count = 0;

    for (let key in settings) {
        count++;
    }

    return count;
}
