const colors = ['red', 'green', 'blue'];

for (const index in colors) {
    console.log(index); // Outputs 0, 1, 2 (the array indexes, as strings)
    console.log(colors[index]); // Outputs red, green, blue
}
// The two lines take turns: 0, red, 1, green, 2, blue
