// A semicolon in front of an IIFE keeps it apart from the line before.
let x = 10
;(function () {
    console.log('IIFE executed safely');
})();
// IIFE executed safely

// Without it, JavaScript reads 10(function () { ... }) as a call of 10.
try {
    let y = 10
    (function () {
        console.log('Error');
    })();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: 10 is not a function
}
