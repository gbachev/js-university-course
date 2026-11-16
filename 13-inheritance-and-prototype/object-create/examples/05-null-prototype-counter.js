// A word that is also an inherited property breaks the counter on a plain object.
function countWords(words, counts) {
    for (const word of words) {
        counts[word] = (counts[word] ?? 0) + 1;
    }
    return counts;
}

const words = ['map', 'constructor', 'map'];

const plain = countWords(words, {});
const pure = countWords(words, Object.create(null));

console.log(plain.map); // 2
console.log(plain.constructor); // function Object() { [native code] }1
console.log(pure.map); // 2
console.log(pure.constructor); // 1
