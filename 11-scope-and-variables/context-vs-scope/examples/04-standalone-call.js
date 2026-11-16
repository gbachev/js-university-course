'use strict';

// Modules are strict anyway, so the directive above only says what we mean here.
function fn() {
    console.log(this);
}

fn(); // undefined
