// replace() with named groups in the replacement string, and with a function.
const log = 'Shipped 2026-03-14, returned 2026-04-02.';
const isoDate = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;

console.log(log.replace(isoDate, '$<day>.$<month>.$<year>'));
// Shipped 14.03.2026, returned 02.04.2026.

const menu = 'Coffee $4.50, cake $3.20 and juice $5.';
const price = /\$(\d+(\.\d{2})?)/g;
const discounted = menu.replace(price, (match, amount) => {
    return '$' + (amount * 0.9).toFixed(2);
});

console.log(discounted); // Coffee $4.05, cake $2.88 and juice $4.50.

// replaceAll() and matchAll() throw when the regex has no g flag.
try {
    menu.replaceAll(/\$/, '€');
} catch (error) {
    console.log(error.name); // TypeError
}
