// A primitive is copied, so the function changes only its own copy.
function changePrimitive(x) {
    x = 999;
}

let score = 100;
changePrimitive(score);
console.log(score); // 100
