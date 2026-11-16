// Task 3: Average rating
// Lecture: Arrow Functions
//
// averageRating(...ratings) gets the star ratings of a product, any number of them,
// and returns their average rounded to 1 decimal place. A product with no ratings
// has an average of 0. The arrow function below reads arguments, but an arrow
// function has no arguments object of its own, so every call throws. Fix it with a
// rest parameter.
//
// Examples:
//   averageRating(5, 4, 4)   // 4.3
//   averageRating()          // 0
//
// Run the tests: npm test -- 10-functions/arrow

export const averageRating = () => {
    if (arguments.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return Math.round((sum / arguments.length) * 10) / 10;
};
