import { check, source, equal } from '/lib/browser-check.js';

const { fillCard } = await import(source('04-profile-card.js'));
const card = document.querySelector('#card');
const text = (selector) => card.querySelector(selector).textContent;

check('the card shows the name, the role and the city', () => {
    equal(fillCard({ name: 'Jane Doe', role: 'Developer', city: 'Sofia' }, card), 'Sofia');
    equal(text('.name'), 'Jane Doe');
    equal(text('.role'), 'Developer');
    equal(text('.city'), 'Sofia');
});

check('a user without a city lives in Remote', () => {
    equal(fillCard({ name: 'John Doe', role: 'Designer' }, card), 'Remote');
    equal(text('.city'), 'Remote');
});

check('other properties of the user are left out', () => {
    const jane = { name: 'Jane Doe', role: 'Developer', city: 'Sofia', email: 'jane@example.com' };
    fillCard(jane, card);
    equal(text('.name'), 'Jane Doe');
    const showsEmail = card.textContent.includes('jane@example.com');
    equal(showsEmail, false, 'the email should not show on the card');
});
