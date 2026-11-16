const items = ['a', 'b', 'c'];
const index = items.indexOf('a');

if (!index) {
    console.log('Not found');
} else {
    console.log('Found at index:', index);
}
// Output: Not found
// This results in wrong logic, as 0 is falsy in JS.
