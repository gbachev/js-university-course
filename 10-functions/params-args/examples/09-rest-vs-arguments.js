function testArguments() {
    console.log(typeof arguments); // object
    console.log(Array.isArray(arguments)); // false
}

function testRest(...args) {
    console.log(typeof args); // object
    console.log(Array.isArray(args)); // true
}

testArguments(1, 2);
testRest(1, 2);
