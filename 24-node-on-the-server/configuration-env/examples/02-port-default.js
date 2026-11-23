// The short default for a port, and the values it gets wrong.
// Each value stands for what process.env.PORT could hold.
for (const value of [undefined, '8080', '', '0', 'abc', '80 80']) {
    const port = Number(value) || 3000;
    console.log(JSON.stringify(value), port);
}
// undefined 3000
// "8080" 8080
// "" 3000
// "0" 3000
// "abc" 3000
// "80 80" 3000
