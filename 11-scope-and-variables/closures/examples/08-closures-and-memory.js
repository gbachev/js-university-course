function createReport() {
    const rows = new Array(1000000).fill('order');
    return () => rows.length;
}

let countRows = createReport();
console.log(countRows()); // 1000000

countRows = null; // now rows can be collected
