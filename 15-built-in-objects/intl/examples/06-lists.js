// Joining a list with the right commas and "and" or "or".
const items = ['Notebook', 'Desk lamp', 'Office chair'];

const us = new Intl.ListFormat('en-US');
const gb = new Intl.ListFormat('en-GB');
const de = new Intl.ListFormat('de-DE');
const either = new Intl.ListFormat('en-US', { type: 'disjunction' });

console.log(us.format(items));
// Notebook, Desk lamp, and Office chair
console.log(gb.format(items));
// Notebook, Desk lamp and Office chair
console.log(de.format(items));
// Notebook, Desk lamp und Office chair
console.log(either.format(items));
// Notebook, Desk lamp, or Office chair
