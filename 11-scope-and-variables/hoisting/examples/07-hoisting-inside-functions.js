var x = 10;

function test() {
    console.log(x); // undefined (not 10)
    var x = 5;
}

test();
