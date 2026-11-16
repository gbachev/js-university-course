// The same factorial with a loop uses a single frame, whatever n is.
function factorialLoop(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialLoop(5)); // 120
