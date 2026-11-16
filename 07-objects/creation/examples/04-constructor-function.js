// Constructor function: called with new, it fills in the new object through this.
function Car(make, model) {
    this.make = make;
    this.model = model;
}

let car = new Car('Toyota', 'Corolla');

console.log(car); // Car { make: 'Toyota', model: 'Corolla' }
console.log(car.make); // Toyota
