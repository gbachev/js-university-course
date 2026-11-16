// Object and array patterns inside each other.
const response = {
    users: [
        { name: 'John', scores: [85, 90] },
        { name: 'Jane', scores: [95, 100] }
    ]
};

const {
    users: [
        { name: firstName, scores: [firstScore] },
        { name: secondName, scores: [, secondScore] }
    ]
} = response;

console.log(firstName, firstScore); // John 85
console.log(secondName, secondScore); // Jane 100
