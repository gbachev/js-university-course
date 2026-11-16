window.onerror = (message, source, lineno, colno, error) => {
    console.log(`${error.name} on line ${lineno}`);
    // RangeError on line 8
    return true;
};

setTimeout(() => {
    '-'.repeat(-1);
}, 0);
