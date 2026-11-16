// The name of an IIFE is not visible outside it.
(function iife() {
    return 'IIFE';
})();

function regular() {
    return 'regular';
}

console.log(regular()); // regular

try {
    console.log(iife());
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: iife is not defined
}
