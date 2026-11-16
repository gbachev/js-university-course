// Side effect: the function changes a variable outside of it.
let total = 0;
function addToTotal(n) {
    total += n;
}

addToTotal(5);
console.log(total); // 5

// No side effect (pure function): the result depends only on the arguments.
function getNewTotal(current, n) {
    return current + n;
}

total = getNewTotal(total, 5);
console.log(total); // 10
