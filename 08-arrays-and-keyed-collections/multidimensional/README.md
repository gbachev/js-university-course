# Multidimensional Arrays

Code for the lecture *Multidimensional Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-2d-array.js` - a grid as an array of rows
- `examples/02-3d-and-4d-arrays.js` - a cube and a hypercube with deeper nesting
- `examples/03-nested-loops.js` - one loop for the rows and one for the columns
- `examples/04-3d-and-4d-loops.js` - one loop per dimension
- `examples/05-row-and-col.js` - the same 2D loop with `row` and `col` as names
- `examples/06-rows-and-columns.js` - read a whole row, or a column with `map()`
- `examples/07-update-element.js` - change one cell by its row and column
- `examples/08-dynamic-creation.js` - build a table with loops
- `examples/09-flat.js` - flatten nested arrays, also with `Infinity`
- `examples/10-jagged-array.js` - rows of different lengths and the missing cells
- `examples/11-transpose.js` - flip the rows of a matrix into columns
- `examples/12-add-matrices.js` - add two matrices element by element
- `examples/13-multiply-matrices.js` - multiply two matrices

Run one with `node 08-arrays-and-keyed-collections/multidimensional/examples/01-2d-array.js` from the repository folder.

## Tasks
1. **Who sits there?** (`tasks/01-seat-in-hall.js`) - read a cell of a jagged 2D array without an error for a missing row
2. **Sales per week** (`tasks/02-weekly-sales.js`) - add up every row of a 2D array
3. **A board for tic-tac-toe** (`tasks/03-game-board.js`) - fix a board whose rows are all the same array

Run the tests with `npm test -- 08-arrays-and-keyed-collections/multidimensional`. They fail until the task is solved. Compare with `solutions/` after you try.
