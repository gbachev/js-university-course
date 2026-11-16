// Configure once, call many times: a price formatter and a filter predicate.
const priceFormatter = currency => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    });
    return amount => formatter.format(amount);
};

const toEuro = priceFormatter('EUR');
console.log(toEuro(12.5)); // €12.50
console.log(toEuro(1999)); // €1,999.00

const books = [
    { title: 'Dune', author: 'John Doe' },
    { title: 'Emma', author: 'Jane Doe' },
    { title: 'Persuasion', author: 'Jane Doe' },
];
const byAuthor = author => book => book.author === author;

const janes = books.filter(byAuthor('Jane Doe'));
console.log(janes.map(book => book.title));
// [ 'Emma', 'Persuasion' ]
