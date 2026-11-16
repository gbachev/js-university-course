const items = ['a', 'b', 'c'];
items.extra = 'd';

// Avoid: for...in also lists the extra property
for (const key in items) {
    console.log(key, items[key]);
}
// Logs: 0 a, 1 b, 2 c, extra d

// Good: for...of gives only the elements
for (const item of items) {
    console.log(item);
}
// Logs: a, b, c
