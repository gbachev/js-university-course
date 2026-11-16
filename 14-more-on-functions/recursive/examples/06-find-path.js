// Each level adds its own label in front of the path its children found.
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

function findPath(items, label) {
    for (const item of items) {
        if (item.label === label) {
            return [item.label];
        }
        if (item.children) {
            const path = findPath(item.children, label);
            if (path) {
                return [item.label, ...path];
            }
        }
    }
    return null;
}

console.log(findPath(menu, 'Crime').join(' > '));
// Books > Fiction > Crime
console.log(findPath(menu, 'Poetry')); // null
