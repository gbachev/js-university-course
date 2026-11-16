let colors = ['red', 'green', 'blue', 'yellow'];

for (let i = 0; i < colors.length; i++) {
    colors[i] = colors[i].toUpperCase(); // modifies each color to uppercase
}

console.log(colors); // [ 'RED', 'GREEN', 'BLUE', 'YELLOW' ]

for (let i = 0; i < colors.length - 1; i++) {
    colors[i + 1] = colors[i + 1].toLowerCase(); // modifies the next color
}

console.log(colors); // [ 'RED', 'green', 'blue', 'yellow' ]
