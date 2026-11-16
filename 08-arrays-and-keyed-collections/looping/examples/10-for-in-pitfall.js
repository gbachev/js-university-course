const items = ['a', 'b', 'c'];
items.extra = 'd';

for (const key in items) {
    console.log(key, items[key]);
}
// Logs: 0 a, 1 b, 2 c, extra d
