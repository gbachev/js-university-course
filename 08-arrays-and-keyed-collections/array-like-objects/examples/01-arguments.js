function logArgs() {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 } - array-like
    console.log(Array.isArray(arguments)); // false
}

logArgs(1, 2, 3);
