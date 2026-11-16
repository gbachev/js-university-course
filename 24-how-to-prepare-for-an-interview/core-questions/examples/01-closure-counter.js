function createCounter() {
    let count = 0;
    return () => {
        count += 1;
        return count;
    };
}

const nextOrderId = createCounter();
console.log(nextOrderId()); // 1
console.log(nextOrderId()); // 2
