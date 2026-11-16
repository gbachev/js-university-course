function outer() {
    let counter = 0;

    return function inner() {
        counter++;
        console.log(counter);
    };
}

const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3
