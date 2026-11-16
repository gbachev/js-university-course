export function growRows(rows, extra) {
    const heights = rows.map((row) => row.offsetHeight);
    rows.forEach((row, i) => {
        row.style.height = `${heights[i] + extra}px`;
    });
}
