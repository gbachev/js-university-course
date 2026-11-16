// We cannot create a Symbol wrapper object with new.
try {
    const sym = new Symbol();
} catch (error) {
    // TypeError: Symbol is not a constructor
    console.log(error.name + ': ' + error.message);
}
