// using var is fine here, but let is preferred
for (var a = 0; a < 3; a++) {
    console.log(a);
} // Output, one value per line: 0, 1, 2

// using var isn't safe here, use let instead
for (var b = 0; b < 3; b++) {
    setTimeout(() => console.log(b), 100);
} // Output, one value per line: 3, 3, 3

// using let is preferred
for (let c = 0; c < 3; c++) {
    setTimeout(() => console.log(c), 100);
} // Output, one value per line: 0, 1, 2

// Each value prints on its own line. The setTimeout lines print about 100 ms
// after the first loop: 3, 3, 3 and then 0, 1, 2.
