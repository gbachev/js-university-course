let colors = ['red', 'green', 'blue'];

colors[-1] = 'yellow'; // adds a property, not an element
colors['string'] = 'purple'; // adds a property, not an element

console.log(colors[-1]); // yellow
console.log(colors['string']); // purple
console.log(colors.length); // 3 - the length is still 3
console.log(colors); // [ 'red', 'green', 'blue', '-1': 'yellow', string: 'purple' ]
