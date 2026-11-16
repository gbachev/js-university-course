// A class method lives on the prototype too: classes are built on prototypes.
class Animal {
    speak() {
        return 'Generic sound';
    }
}

const dog = new Animal();
console.log(dog.speak()); // Generic sound
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
