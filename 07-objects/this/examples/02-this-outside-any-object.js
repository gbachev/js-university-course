// Our example files are modules, and modules run in strict mode. So here this is
// undefined at the top level and in a regular function. In a browser script that is
// not a module and not in strict mode, both log window.
console.log(this); // undefined (window in a browser script)

function showThis() {
    console.log(this);
}

showThis(); // undefined (window in a browser script that is not in strict mode)
