// A frozen config cannot be changed by accident.
const settings = Object.freeze({
    maxUsers: 100,
    appName: 'MyApp'
});

// Our example files are modules (strict mode), so the change throws.
try {
    settings.maxUsers = 1000;
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot assign to read only property 'maxUsers' of object '#<Object>'
}

console.log(settings.maxUsers); // 100
