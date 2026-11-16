// Task 3: A numbered reading list
// Lecture: Looping Through Arrays
//
// Our reading list app shows the books with a number in front: '1. Dune', '2. Emma'.
// The function numberTheList(titles) should return a new array with those lines, but
// the lines come out as '01. Dune' and '11. Emma', and when the list array has an extra
// property, it shows up as a book too. The bug is in the choice of loop. Fix it so the
// numbers start at 1 and only the books are listed.
//
// Examples:
//   numberTheList(['Dune', 'Emma'])   // [ '1. Dune', '2. Emma' ]
//   numberTheList([])                 // []
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/looping

export function numberTheList(titles) {
    const lines = [];

    for (const index in titles) {
        lines.push(index + 1 + '. ' + titles[index]);
    }

    return lines;
}
