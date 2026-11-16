function flatten(list, result = []) {
    for (const item of list) {
        if (Array.isArray(item)) {
            flatten(item, result);
        } else {
            result.push(item);
        }
    }
    return result;
}

function flattenWithStack(list) {
    const stack = [...list];
    const result = [];
    while (stack.length > 0) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            for (const inner of item) {
                stack.push(inner);
            }
        } else {
            result.push(item);
        }
    }
    return result.reverse();
}

const boxes = ["book", ["pen", ["ink", ["nib"]]], "mug"];

console.log(flatten(boxes));
// [ 'book', 'pen', 'ink', 'nib', 'mug' ]
console.log(flattenWithStack(boxes));
// [ 'book', 'pen', 'ink', 'nib', 'mug' ]
console.log(flatten([])); // []

// Holes: flat() drops the empty slot, for...of turns it into undefined.
console.log([1, , 3].flat()); // [ 1, 3 ]
console.log(flatten([1, , 3])); // [ 1, undefined, 3 ]
