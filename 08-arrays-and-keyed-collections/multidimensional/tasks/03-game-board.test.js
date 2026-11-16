import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createBoard } = await import(
    process.env.SOLUTIONS ? '../solutions/03-game-board.js' : './03-game-board.js'
);

test('the board has the rows and the columns we ask for', () => {
    assert.deepEqual(createBoard(2, 3), [
        ['.', '.', '.'],
        ['.', '.', '.'],
    ]);
});

test('a move in one cell changes only that cell', () => {
    const board = createBoard(3, 3);
    board[0][0] = 'X';
    assert.deepEqual(board, [
        ['X', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
    ]);
});

test('every row is its own array', () => {
    const board = createBoard(2, 2);
    assert.notEqual(board[0], board[1]);
});

test('a board of 0 rows is an empty array', () => {
    assert.deepEqual(createBoard(0, 3), []);
});
