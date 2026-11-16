// Task 3: Count the votes
// Lecture: Object.create()
//
// Readers vote for the book of the month by typing its title, so the titles come from
// users and can be anything. Write countVotes(votes): it takes an array of titles and
// returns a dictionary with the number of votes per title. Create the dictionary with
// Object.create(null), so titles such as 'constructor', 'toString' or '__proto__' are
// counted like any other. An empty array gives an empty dictionary.
//
// Examples:
//   const result = countVotes(['Dune', 'Emma', 'Dune']);
//   result.Dune                       // 2
//   result.Emma                       // 1
//   Object.getPrototypeOf(result)     // null
//
// Run the tests: npm test -- 13-inheritance-and-prototype/object-create

export function countVotes(votes) {
    // Your code here
}
