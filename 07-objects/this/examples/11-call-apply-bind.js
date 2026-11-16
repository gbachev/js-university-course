// call and apply run the function right away with the this we give them.
function introduce() {
    console.log(`Hi, I am ${this.name}`);
}

let person = { name: 'John Doe' };

introduce.call(person); // Hi, I am John Doe
introduce.apply(person); // Hi, I am John Doe

let boundFn = introduce.bind(person);
boundFn(); // Hi, I am John Doe
