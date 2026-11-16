const condition1 = false;
const condition2 = true;
const condition3 = true;
const value1 = 'value 1';
const value2 = 'value 2';
const value3 = 'value 3';
const value4 = 'value 4';

const result = condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;

console.log(result); // value 2

// The same as an if ... else chain. We put it in a function, because return only
// works inside a function.
function chooseValue() {
    if (condition1) {
        return value1;
    } else if (condition2) {
        return value2;
    } else if (condition3) {
        return value3;
    } else {
        return value4;
    }
}

console.log(chooseValue()); // value 2
