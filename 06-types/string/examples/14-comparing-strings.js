let str1 = 'a';
let str2 = 'b';

if (str1 === str2) {
    console.log(str1 + ' is equal to ' + str2); // does not print
} else {
    console.log(str1 + ' is not equal to ' + str2); // a is not equal to b
}

if (str1 >= str2) {
    console.log(str1 + ' is greater or equal than ' + str2); // does not print
} else {
    console.log(str1 + ' is less than ' + str2); // a is less than b
}

console.log('1' === '1'); // true
console.log('1' == 1); // true, because we use ==
console.log('1' === 1); // false, because === compares by value and type
