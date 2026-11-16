function convertArgs() {
    const argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray); // [ 1, 2, 3 ]
}

convertArgs(1, 2, 3);
