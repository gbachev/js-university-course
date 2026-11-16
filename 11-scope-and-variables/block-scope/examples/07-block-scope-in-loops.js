// The callbacks run after both loops have finished, the let loop's first.
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
// 0 1 2

// With var only one shared binding is used.
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
// 3 3 3
