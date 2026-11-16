function makeCounters() {
    let a = 0;
    return [
        () => ++a,
        () => ++a
    ];
}

const [c1, c2] = makeCounters();
console.log(c1()); // 1
console.log(c2()); // 2
