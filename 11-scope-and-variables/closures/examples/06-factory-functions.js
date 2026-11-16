function multiply(by) {
    return function(x) {
        return x * by;
    };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
