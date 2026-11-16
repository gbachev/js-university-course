// This file is a module, so it runs in strict mode. Here a function declared in a block
// stays in the block.
{
    function test() {
        return 'inside block';
    }
}

try {
    console.log(test); // strict mode: ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: test is not defined
}
