// The tail-recursive sum as a loop: the parameters become variables.
function sumLoop(n) {
    let acc = 0;
    while (n > 0) {
        acc = acc + n;
        n = n - 1;
    }
    return acc;
}

console.log(sumLoop(4)); // 10
console.log(sumLoop(100_000)); // 5000050000
