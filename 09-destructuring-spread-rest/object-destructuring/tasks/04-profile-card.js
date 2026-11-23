// Task 4: A profile card
// Lecture: Object Destructuring
//
// A first look at the page: write fillCard(user, card), which fills the profile card of
// the page from a user object. card is the <article id="card">, with three empty elements
// inside it: .name, .role and .city. Take name, role and city out of user with one
// destructuring line; a user without a city lives in 'Remote'. Put each value into the
// text of its element and return the city that was shown. The DOM gets a section of its
// own (18); for now two tools are enough:
//
//   card.querySelector('.name')    // the element with the class name, inside the card
//   element.textContent = 'Ada'    // the text of that element
//
// Examples:
//   fillCard({ name: 'Jane Doe', role: 'Developer', city: 'Sofia' }, card)   // 'Sofia'
//   fillCard({ name: 'John Doe', role: 'Designer' }, card)                   // 'Remote'
//
// Open the page: run npm run serve, then open
//   09-destructuring-spread-rest/object-destructuring/tasks/04-profile-card.html

export function fillCard(user, card) {
    // Your code here
}
