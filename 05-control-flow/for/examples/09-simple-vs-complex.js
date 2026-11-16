// Simple and readable
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Output, one value per line: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// Complex and hard to read
for (let i = 0, j = 10; i < 10 && j > 0; i++, j--) {
    console.log(i, j);
}
// Output, one pair per line: 0 10, 1 9, 2 8 ... 9 1
