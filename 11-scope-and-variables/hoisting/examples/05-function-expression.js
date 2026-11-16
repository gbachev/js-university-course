try {
    sayHello(); // TypeError: sayHello is not a function
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: sayHello is not a function
}

var sayHello = function() {
    console.log('Hello');
};
