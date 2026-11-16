// performance.now() against Date.now(), and timing a loop.
// The numbers differ by machine and by run.
console.log(Date.now()); // 1794785794478
console.log(performance.now()); // 20.626875

const start = performance.now();
let total = 0;
for (let i = 0; i < 1_000_000; i++) {
    total += i;
}
const elapsed = performance.now() - start;
console.log(`${elapsed.toFixed(2)} ms`); // 2.67 ms
