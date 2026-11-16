// Better: every code path returns a value.
function getStatus(code) {
    if (code === 200) return 'OK';
    return 'Error';
}

console.log(getStatus(200)); // OK
console.log(getStatus(404)); // Error
