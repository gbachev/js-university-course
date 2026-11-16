// An arrow function as a method does not get the object as this.
const obj = {
    value: 42,
    getValue: () => this.value
};

// The arrow function takes this from the top level of the file. In our module that is
// undefined, so reading this.value throws. In a browser script this is window, and
// we get window.value, which is undefined.
try {
    console.log(obj.getValue());
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'value')
}
