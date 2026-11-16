let colors = ['red', 'yellow', 'blue'];

colors.length = 2;
console.log(colors); // [ 'red', 'yellow' ]

colors.length = 5;
console.log(colors); // [ 'red', 'yellow', <3 empty items> ]
