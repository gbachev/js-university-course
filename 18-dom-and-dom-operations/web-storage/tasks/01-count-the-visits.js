// Task 1: Count the visits
// Lecture: Web Storage: localStorage and sessionStorage
//
// countVisit() adds one to the number of visits saved in localStorage under the key
// "visits", saves the new number and returns it as a number. The first visit gives 1 and
// the second should give 2, but it gives 11. Fix it. On a first visit there is no
// "visits" key yet.
//
// Examples:
//   countVisit()   // 1 on the first visit
//   countVisit()   // 2
//   countVisit()   // 3
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/web-storage/tasks/01-count-the-visits.html

export function countVisit() {
    const visits = localStorage.getItem('visits') || 0;
    const next = visits + 1;
    localStorage.setItem('visits', next);
    return next;
}
