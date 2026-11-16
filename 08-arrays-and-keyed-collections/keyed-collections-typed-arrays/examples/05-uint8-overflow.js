const uint8 = new Uint8Array(4);
uint8[0] = 255;
uint8[1] = 256; // Overflow - will wrap to 0
uint8[2] = -1; // Underflow - will wrap to 255

console.log(uint8); // Uint8Array(4) [ 255, 0, 255, 0 ]
