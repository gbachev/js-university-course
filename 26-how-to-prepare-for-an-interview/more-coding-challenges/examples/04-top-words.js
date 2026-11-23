function topWords(text, k) {
    const words = text.toLowerCase().match(/[a-z']+/g) ?? [];
    const counts = new Map();
    for (const word of words) {
        counts.set(word, (counts.get(word) ?? 0) + 1);
    }
    return [...counts]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k);
}

const review = 'The ending is great. Great plot, great cast, the end.';

console.log(topWords(review, 2)); // [['great', 3], ['the', 2]]
console.log(topWords('', 2)); // []
