let value = 'global';

function test() {
    let value = 'local';
    console.log(value); // local
}

test();
