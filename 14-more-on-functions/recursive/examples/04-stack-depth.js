// How deep can we go before the stack runs out?
let depth = 0;

function goDeeper() {
    depth++;
    goDeeper();
}

try {
    goDeeper();
} catch (error) {
    // The number depends on the engine and its version.
    console.log(depth); // 9160 in one run on Node 22
}
