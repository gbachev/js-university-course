// Task 2: One step too far
// Lecture: Dev Tools (Features, Debugging, Breakpoints)
//
// averageRating(reviews) should return the average of the stars of a product's
// reviews, but every call throws a TypeError. Start npm run serve, open
// tasks/02-one-step-too-far.html and turn on "Pause on uncaught exceptions", as in the
// lecture. The stack trace in the test output is another route. Find the line that
// throws and fix it. A product with no reviews yet has an average of 0.
//
// Examples:
//   averageRating([{ stars: 4 }, { stars: 5 }, { stars: 3 }])   // 4
//   averageRating([])                                           // 0
//
// Run the tests: npm test -- 16-error-handling-and-debugging/dev-tools

export function averageRating(reviews) {
    let sum = 0;
    for (let i = 0; i <= reviews.length; i++) {
        sum = sum + reviews[i].stars;
    }
    return sum / reviews.length;
}
