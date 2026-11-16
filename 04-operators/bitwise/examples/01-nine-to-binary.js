// Convert 9 to binary: divide by 2, keep the integer quotient, the remainder is a bit.
// We place the bits from right to left.
console.log(parseInt(9 / 2)); // 4, remainder 1, the first bit (___1)
console.log(parseInt(4 / 2)); // 2, remainder 0, the second bit (__01)
console.log(parseInt(2 / 2)); // 1, remainder 0, the third bit (_001)
console.log(parseInt(1 / 2)); // 0, remainder 1, the fourth bit (1001)
// The quotient is now 0 so we stop. The binary representation of 9 is 1001.
