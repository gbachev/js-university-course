// Inside a method, an arrow callback keeps the this of the method.
let user = {
    name: 'John Doe',
    hobbies: ['Reading', 'Gaming', 'Coding'],
    printHobbies() {
        this.hobbies.forEach((hobby) => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};

user.printHobbies();
// John Doe likes Reading
// John Doe likes Gaming
// John Doe likes Coding
