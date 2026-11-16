// A function declaration is hoisted, so we can call it before the line that defines it.
console.log(square(4)); // 16

function square(x) {
    return x * x;
}
