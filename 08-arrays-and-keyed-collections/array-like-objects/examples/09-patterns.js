const squares = Array.from({ length: 5 }, (_, i) => i * i);
console.log(squares); // [ 0, 1, 4, 9, 16 ]

const letters = Array.from({ length: 5 }, (_, i) => String.fromCharCode(65 + i));
console.log(letters); // [ 'A', 'B', 'C', 'D', 'E' ]
