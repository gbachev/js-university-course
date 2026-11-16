// A base case that checks one exact value can be skipped: 2.5, 1.5, 0.5, -0.5, ...
function countdown(n) {
    if (n === 0) {
        return 'Go!';
    }
    return countdown(n - 1);
}

try {
    console.log(countdown(2.5));
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
// RangeError: Maximum call stack size exceeded
