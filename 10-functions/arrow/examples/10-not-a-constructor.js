// An arrow function cannot be called with new.
const Foo = () => {};

try {
    const obj = new Foo();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Foo is not a constructor
}
