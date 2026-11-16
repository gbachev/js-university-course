// A reachable function keeps alive the variables of the scope it was created in.
function createTracker() {
    const visits = [];

    return function track(page) {
        visits.push(page);
        return visits.length;
    };
}

let track = createTracker();
console.log(track('/home')); // 1
console.log(track('/cart')); // 2

track = null; // now visits is unreachable too
