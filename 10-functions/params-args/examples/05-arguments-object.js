// A regular function can read every argument through the arguments object.
function sum() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(sum(1, 2, 3)); // 6
