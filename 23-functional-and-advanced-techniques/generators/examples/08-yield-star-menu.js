// yield* hands over to another generator, so a recursive walk handles any depth.
const menu = [
    { label: 'Home' },
    {
        label: 'Shop',
        children: [
            { label: 'Books' },
            { label: 'Music', children: [{ label: 'Vinyl' }] },
        ],
    },
    { label: 'Contact' },
];

function* walk(items, depth = 0) {
    for (const item of items) {
        yield { label: item.label, depth };
        if (item.children) {
            yield* walk(item.children, depth + 1);
        }
    }
}

for (const { label, depth } of walk(menu)) {
    console.log('  '.repeat(depth) + label);
}
// Home
// Shop
//   Books
//   Music
//     Vinyl
// Contact

const music = walk(menu).find((item) => item.label === 'Music');
console.log(music); // { label: 'Music', depth: 1 }
