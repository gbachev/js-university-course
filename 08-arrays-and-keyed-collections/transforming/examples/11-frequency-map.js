const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const frequency = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(frequency); // { apple: 3, banana: 2, orange: 1 }
