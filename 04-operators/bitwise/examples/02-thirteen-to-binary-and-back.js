// Convert 13 to binary.
console.log(parseInt(13 / 2)); // 6, remainder 1, the first bit (___1)
console.log(parseInt(6 / 2)); // 3, remainder 0, the second bit (__01)
console.log(parseInt(3 / 2)); // 1, remainder 1, the third bit (_101)
console.log(parseInt(1 / 2)); // 0, remainder 1, the fourth bit (1101)
// The quotient is now 0 so we stop. The binary representation of 13 is 1101.

// 1101 to decimal, starting from the rightmost bit.
console.log(1*2**0 + 0*2**1 + 1*2**2 + 1*2**3); // 13 (1 + 0 + 4 + 8)
