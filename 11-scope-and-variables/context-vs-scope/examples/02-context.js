const user = {
    name: 'John',
    greet() {
        console.log(this.name);
    }
};

user.greet(); // John (this === user)
