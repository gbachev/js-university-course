// A function expression is called through the variable that holds it.
const sayHi = function(name) {
    console.log(`Hi, ${name}`);
};

sayHi('Jane'); // Hi, Jane

// Arrow functions are function expressions too.
const shout = (word) => {
    console.log(word.toUpperCase());
};

shout('look'); // LOOK
