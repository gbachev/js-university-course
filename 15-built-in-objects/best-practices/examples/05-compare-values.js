// Formatted output contains non-breaking spaces, so we compare values, not strings.
const eur = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});

const label = eur.format(4.5);

console.log(label); // 4,50 €
console.log(label === '4,50 €'); // false
console.log(label.includes('\u00a0')); // true

// in a test, normalize the spaces first
console.log(label.replace(/\s/g, ' ') === '4,50 €'); // true
