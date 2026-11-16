// The three loops below never end on their own. We added a guard to each one
// (the guard lines), so the file stops after a few iterations and we can see the problem.
let guard;

// Infinite loop - example 1
guard = 0;
for (let i = 0; i < 10; ) {
    console.log(i);
    // i is never incremented, causing an infinite loop
    if (++guard === 3) break; // guard
}
// Output, one value per line: 0, 0, 0 (and forever without the guard)

// Infinite loop - example 2
guard = 0;
for (let i = 0; i < 10; i++) {
    console.log(i);
    i--;
    // i is decremented after each iteration, causing an infinite loop
    if (++guard === 3) break; // guard
}
// Output, one value per line: 0, 0, 0 (and forever without the guard)

// Infinite loop - example 3
guard = 0;
for (let i = 1; i % 2 !== 0; i += 2) {
    console.log(i);
    // i is always odd, causing an infinite loop
    if (++guard === 3) break; // guard
}
// Output, one value per line: 1, 3, 5 (and on and on without the guard)
