// With new, this is the new object the constructor fills in.
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        console.log(`Hi, I am ${this.name}`);
    };
}

let p = new Person('John Doe');
p.sayHi(); // Hi, I am John Doe
