// Rest parameters work in arrow functions.
const collect = (...args) => {
    console.log(args);
};

collect(1, 2, 3); // [ 1, 2, 3 ]
