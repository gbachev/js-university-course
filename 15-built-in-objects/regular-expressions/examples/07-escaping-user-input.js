// Escape user input before it goes into new RegExp().
function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const search = 'c++';
const notes = 'I write C++ at work and JavaScript at home.';

try {
    new RegExp(search, 'i');
} catch (error) {
    console.log(error.name); // SyntaxError
}

const safe = new RegExp(escapeRegExp(search), 'i');

console.log(safe.source); // c\+\+
console.log(safe.test(notes)); // true
