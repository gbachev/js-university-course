// The pattern mirrors the object inside the object.
const user = {
    name: 'John',
    address: {
        city: 'NYC',
        zip: 12345
    }
};

const {
    address: { city, zip }
} = user;

console.log(city); // NYC
console.log(zip); // 12345
