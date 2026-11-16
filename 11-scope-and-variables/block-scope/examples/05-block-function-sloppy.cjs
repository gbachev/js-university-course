// This file ends in .cjs, so Node runs it as a plain script in sloppy mode. There a
// function declared in a block is also visible after the block.
{
    function test() {
        return 'inside block';
    }
}

console.log(test); // [Function: test] (sloppy mode: works)
