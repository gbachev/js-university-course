// Percentages, compact numbers and units.
const percent = new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 1
});
console.log(percent.format(0.256)); // 25.6%

const compact = new Intl.NumberFormat('de-DE', {
    notation: 'compact'
});
console.log(compact.format(1250000)); // 1,3 Mio.

const weight = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'kilogram',
    unitDisplay: 'long'
});
console.log(weight.format(2.5)); // 2.5 kilograms
