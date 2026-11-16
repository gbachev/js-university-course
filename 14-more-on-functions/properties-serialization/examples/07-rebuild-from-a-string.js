// A function rebuilt from its source runs in the global scope and loses its closure.
function createCounter() {
    let count = 0;
    return function next() {
        count++;
        return count;
    };
}

const next = createCounter();
console.log(next()); // 1

const source = next.toString();
const copy = new Function(`return ${source}`)();
console.log(copy.name); // next

try {
    copy();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: count is not defined
}
