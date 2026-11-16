// Iterator helpers are lazy: an endless sequence is safe once take() sets a limit.
function orderIds(start) {
    let id = start;

    return {
        next() {
            console.log(`computing ${id}`);
            return { value: id++, done: false };
        }
    };
}

const labels = Iterator.from(orderIds(1000))
    .filter(id => id % 2 === 0)
    .map(id => `ORD-${id}`)
    .take(3)
    .toArray();
// computing 1000
// computing 1001
// computing 1002
// computing 1003
// computing 1004

console.log(labels); // [ 'ORD-1000', 'ORD-1002', 'ORD-1004' ]

const scores = [72, 95, 88, 61];
const high = scores.values().drop(1).filter(n => n > 80);
console.log(high.toArray()); // [ 95, 88 ]
