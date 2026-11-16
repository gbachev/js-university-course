// typeof checks the type before we call a string method on the value.
let variable = 'some text';

if (typeof variable === 'string') {
    console.log(variable.toUpperCase()); // SOME TEXT
}
