let msg = 'hello';

function show() {
    console.log(msg);
}

show();
show.call({});
show.apply({});
// Always prints hello
