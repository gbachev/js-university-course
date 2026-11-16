// No match gives null (or an empty list), without an error. The error comes when we use it.
console.log(document.getElementById('#products')); // null

const banner = document.querySelector('.banner');
console.log(banner); // null
console.log(banner?.textContent); // undefined
console.log(document.querySelectorAll('.banner').length); // 0

try {
    console.log(banner.textContent);
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
// TypeError: Cannot read properties of null (reading 'textContent')
// (Chrome's wording; other browsers phrase it differently)
