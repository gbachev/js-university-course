let count = 0;

function incrementGlobal() {
    count = count + 1;
}

incrementGlobal();
incrementGlobal();
console.log(count); // 2
