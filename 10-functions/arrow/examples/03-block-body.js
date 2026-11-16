// A block body needs braces and an explicit return.
const logSum = (a, b) => {
    const sum = a + b;
    console.log(sum);
    return sum;
};

const result = logSum(2, 3); // 5
console.log(result); // 5
