const version = 1.0;

try {
    version = 2.0; // TypeError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Assignment to constant variable.
}

// const protects the binding, not the value.
const settings = { theme: 'dark' };
settings.theme = 'light'; // allowed
console.log(settings.theme); // light
