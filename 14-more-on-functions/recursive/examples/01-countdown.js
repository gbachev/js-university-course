// A base case that stops, and a recursive case with a smaller n.
function countdown(n) {
    if (n === 0) {
        console.log('Go!'); // base case: stop here
        return;
    }
    console.log(n);
    countdown(n - 1); // recursive case: a smaller n
}

countdown(3);
// 3
// 2
// 1
// Go!
