const buffer = new ArrayBuffer(4);
const int8 = new Int8Array(buffer);
const uint8 = new Uint8Array(buffer);

int8[0] = -1;

console.log(uint8[0]); // 255 - same byte interpreted differently
