// In sloppy mode, an undeclared name becomes a global, and globals live as long as the page.
// This file ends in .cjs, so Node runs it as a plain script in sloppy mode.
function loadVisits() {
    visits = new Array(1_000_000).fill('/home'); // no let or const
    return visits.length;
}

console.log(loadVisits()); // 1000000
console.log(globalThis.visits.length); // 1000000
