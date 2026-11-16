// The timers run after both loops have finished, the let loop's first.
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
// 0 1 2

function schedule(n) {
    setTimeout(() => console.log(n), 0);
}

for (var i = 0; i < 3; i++) {
    schedule(i);
}
// 0 1 2
