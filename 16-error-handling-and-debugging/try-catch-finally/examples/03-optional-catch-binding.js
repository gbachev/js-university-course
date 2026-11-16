// Since ES2019 we can leave out the variable of catch when we do not need it.
function isValidJson(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}

console.log(isValidJson('{"theme":"dark"}')); // true
console.log(isValidJson('{theme: dark}')); // false
