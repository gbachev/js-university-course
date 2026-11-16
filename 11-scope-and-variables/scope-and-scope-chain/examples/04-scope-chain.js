// outer() logs its two lines first, then calls inner(), which logs two more.
let globalVar = 'global';

function outer() {
    let outerVar = 'outer';

    function inner() {
        let innerVar = 'inner';
        console.log(globalVar); // global
        console.log(outerVar);  // outer
    }

    console.log(globalVar); // global
    console.log(outerVar); // outer
    // console.log(innerVar); // ReferenceError

    inner();
}

outer();
