// Symbol.iterator, a well-known symbol, makes a plain object iterable.
let myIterable = {};

function iteratorFunction() {
    let step = 0;
    return {
        next() {
            step++;
            if (step <= 3) {
                return { value: step, done: false };
            }
            return { done: true };
        }
    };
}

myIterable[Symbol.iterator] = iteratorFunction;

for (let value of myIterable) {
    console.log(value); // 1, then 2, then 3
}
