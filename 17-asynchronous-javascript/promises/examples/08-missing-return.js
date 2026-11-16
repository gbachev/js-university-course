// Without return, the next then() does not wait and gets undefined.
function later(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 100);
    });
}

function addVat(total) {
    return later(total * 1.2);
}

later(60)
    .then((total) => {
        addVat(total); // missing return
    })
    .then((result) => console.log(result)); // undefined
