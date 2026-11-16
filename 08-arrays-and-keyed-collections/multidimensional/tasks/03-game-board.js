// Task 3: A board for tic-tac-toe
// Lecture: Multidimensional Arrays
//
// Our game starts with an empty board: a 2D array of rows, every cell holding '.'. The
// function createBoard(rows, cols) builds that board. It looks right when we print it,
// but when a player puts an 'X' in one cell, the same cell of every row changes too.
// Find out why and fix it, so every row is its own array. A board of 0 rows is an
// empty array.
//
// Examples:
//   createBoard(2, 3)   // [ [ '.', '.', '.' ], [ '.', '.', '.' ] ]
//   const board = createBoard(3, 3);
//   board[0][0] = 'X';  // only the first row changes
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/multidimensional

export function createBoard(rows, cols) {
    return new Array(rows).fill(new Array(cols).fill('.'));
}
