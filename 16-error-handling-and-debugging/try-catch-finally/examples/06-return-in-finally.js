// A return in finally replaces the result of try and swallows the error. Bad practice.
function getDiscount(text) {
    try {
        return JSON.parse(text).discount;
    } finally {
        return 0;
    }
}

console.log(getDiscount('{"discount":15}')); // 0
console.log(getDiscount('{broken')); // 0
