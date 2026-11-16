// Arguments go to the parameters by position. Missing ones are undefined,
// extra ones are ignored.
function logInfo(a, b) {
    console.log(a, b);
}

logInfo('x'); // x undefined
logInfo('x', 'y', 'z'); // x y - 'z' is ignored

// length is the number of named parameters, not of the arguments we pass.
console.log(logInfo.length); // 2
