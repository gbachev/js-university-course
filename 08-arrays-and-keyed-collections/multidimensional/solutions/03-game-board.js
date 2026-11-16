export function createBoard(rows, cols) {
    const board = [];

    // fill() puts the same row array in every slot, so we create a new row each time.
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(cols).fill('.');
    }

    return board;
}
