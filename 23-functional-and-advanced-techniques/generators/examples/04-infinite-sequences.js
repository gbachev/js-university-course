// Endless generators are safe as long as we take a limited number of values.
function* orderIds(prefix) {
    let id = 1;
    while (true) {
        yield `${prefix}-${id++}`;
    }
}

const ids = orderIds('ORD');
console.log(ids.next().value); // ORD-1
console.log(ids.next().value); // ORD-2

function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

console.log(fibonacci().take(8).toArray());
// [
//   0, 1, 1,  2,
//   3, 5, 8, 13
// ]
