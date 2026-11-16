// Create a buffer of 16 bytes
const buffer = new ArrayBuffer(16);

// Create a view that treats each 2 bytes as a 16-bit integer
const view = new Int16Array(buffer);

view[0] = 100;
view[1] = 200;

console.log(view);
// Int16Array(8) [
//   100, 200, 0, 0,
//     0,   0, 0, 0
// ]
