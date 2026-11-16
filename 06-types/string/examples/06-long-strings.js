// Three ways to write a long string.
let long1 = 'This is a really really ';
long1 += 'really really really really';
long1 += 'long string.';

let long2 = 'This is another really \
really really really really \
long string.';

let long3 = `This another really really
        really really really really
        long string`;

console.log(long1); // This is a really really really really really reallylong string.
console.log(long2); // This is another really really really really really long string.
console.log(long3);
// This another really really
//         really really really really
//         long string
