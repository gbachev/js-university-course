// From the main script, the order of these two is not fixed.
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));

// setImmediate, setTimeout or the other way round
