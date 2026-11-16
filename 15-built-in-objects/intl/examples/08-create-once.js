// A shortcut for one value, and one formatter reused for a whole list.
const cart = [
    { name: 'Notebook', price: 4.5 },
    { name: 'Desk lamp', price: 39.9 },
    { name: 'Office chair', price: 1249 }
];

const options = { style: 'currency', currency: 'EUR' };

console.log((39.9).toLocaleString('de-DE', options)); // 39,90 €

const eur = new Intl.NumberFormat('de-DE', options);

for (const item of cart) {
    console.log(`${item.name}: ${eur.format(item.price)}`);
}
// Notebook: 4,50 €
// Desk lamp: 39,90 €
// Office chair: 1.249,00 €
