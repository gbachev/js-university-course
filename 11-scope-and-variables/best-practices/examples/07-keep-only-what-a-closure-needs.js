// considered bad practice: the closure keeps every row alive
function createReport() {
    const rows = new Array(1000000).fill('order');
    return () => rows.length;
}

// better: keep only the number the closure needs
function createCount() {
    const rows = new Array(1000000).fill('order');
    const count = rows.length;
    return () => count;
}

const countRows = createCount();
console.log(countRows()); // 1000000
