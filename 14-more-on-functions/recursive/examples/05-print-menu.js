// One function handles one level and calls itself for the children.
const menu = [
    {
        label: 'Books',
        children: [
            { label: 'Fiction', children: [{ label: 'Crime' }] },
            { label: 'Non-fiction' },
        ],
    },
    { label: 'Music', children: [{ label: 'Vinyl' }] },
    { label: 'Gift Cards' },
];

function printMenu(items, depth = 0) {
    for (const item of items) {
        console.log('  '.repeat(depth) + item.label);
        if (item.children) {
            printMenu(item.children, depth + 1);
        }
    }
}

printMenu(menu);
// Books
//   Fiction
//     Crime
//   Non-fiction
// Music
//   Vinyl
// Gift Cards
