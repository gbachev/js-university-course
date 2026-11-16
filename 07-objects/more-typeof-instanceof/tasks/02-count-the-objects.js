// Task 2: Count the objects
// Lecture: typeof vs instanceof
//
// Before we save a form, we check how many of its values are objects and how many are
// primitives. countByKind(values) takes an array and should return an object like
// { objects: 2, primitives: 3 }. Objects are plain objects, arrays, dates and
// functions too; primitives are strings, numbers, booleans, undefined and null. The
// counts are wrong: there are two bugs, both about what typeof returns. Fix them.
//
// Examples:
//   countByKind(['Anna', 30, { city: 'Sofia' }])     // { objects: 1, primitives: 2 }
//   countByKind([null, function () {}])              // { objects: 1, primitives: 1 }
//
// Run the tests: npm test -- 07-objects/more-typeof-instanceof

export function countByKind(values) {
    let objects = 0;
    let primitives = 0;

    for (const value of values) {
        if (typeof value === 'object') {
            objects++;
        } else {
            primitives++;
        }
    }

    return { objects, primitives };
}
