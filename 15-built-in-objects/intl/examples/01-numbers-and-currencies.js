// One price, three locales. Output checked in Node 22 (full ICU). Some spaces in it
// are non-breaking (U+00A0 or U+202F), which the console shows as ordinary spaces.
const price = 1234.5;

console.log(price.toFixed(2)); // 1234.50

const options = { style: 'currency', currency: 'EUR' };
const us = new Intl.NumberFormat('en-US', options);
const de = new Intl.NumberFormat('de-DE', options);
const bg = new Intl.NumberFormat('bg-BG', options);

console.log(us.format(price)); // €1,234.50
console.log(de.format(price)); // 1.234,50 €
console.log(bg.format(price)); // 1234,50 €
console.log(bg.format(12345.5)); // 12 345,50 €

// style: 'currency' without a currency throws.
try {
    new Intl.NumberFormat('en-US', { style: 'currency' });
} catch (error) {
    console.log(error.name); // TypeError
}
