// Task 2: Brighter, not wrapped
// Lecture: WeakMap, WeakSet and Typed Arrays
//
// A photo editor keeps the brightness of each pixel in a Uint8Array, from 0 (black)
// to 255 (white). brighten(pixels, amount) should return a new Uint8Array with every
// value raised by amount, and a negative amount darkens. The code below has a bug:
// a value that goes past 255 wraps around and turns a bright pixel dark, and a value
// below 0 wraps around and turns a dark pixel bright. Fix it so the values stop at 255
// and at 0. The pixels we pass in must not change.
//
// Examples:
//   brighten(new Uint8Array([10, 200, 250]), 20)   // Uint8Array(3) [ 30, 220, 255 ]
//   brighten(new Uint8Array([10, 200, 250]), -20)  // Uint8Array(3) [ 0, 180, 230 ]
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/keyed-collections-typed-arrays

export function brighten(pixels, amount) {
    return pixels.map(value => value + amount);
}
