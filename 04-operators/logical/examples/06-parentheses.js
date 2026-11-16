let a = 1;
let b = 2;
let c = 3;

// The parentheses are evaluated first, then || combines the two results.
if ((a < b && b < c) || (a > b && b > c)) {
    console.log('b is between a and c'); // b is between a and c
}
