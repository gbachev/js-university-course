import { check, equal, source } from '/lib/browser-check.js';

const { countVisit } = await import(source('01-count-the-visits.js'));

check('the first visit gives 1', () => {
    localStorage.removeItem('visits');
    equal(countVisit(), 1);
});

check('the next visits give 2 and 3', () => {
    localStorage.removeItem('visits');
    countVisit();
    equal(countVisit(), 2);
    equal(countVisit(), 3);
});

check('the count is saved in localStorage', () => {
    localStorage.removeItem('visits');
    countVisit();
    countVisit();
    equal(localStorage.getItem('visits'), '2');
});

check('it goes on from a count saved earlier', () => {
    localStorage.setItem('visits', '41');
    try {
        equal(countVisit(), 42);
    } finally {
        localStorage.removeItem('visits');
    }
});
