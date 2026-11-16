for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // skip the iteration
    }
    console.log(i);
} // Output, one value per line: 0, 1, 3, 4
