import { check, equal, source } from '/lib/browser-check.js';

const { setUpAddButton } = await import(source('02-welcome-once.js'));

const button = document.querySelector('#add');
const list = document.querySelector('#books');
const messages = document.querySelector('#messages');
setUpAddButton(button, list, messages);

check('the first click adds a book and the welcome', () => {
    button.click();
    equal(list.children.length, 1);
    equal(messages.children.length, 1);
    equal(messages.textContent, 'Welcome to your reading list');
});

check('two more clicks add two more books', () => {
    button.click();
    button.click();
    equal(list.children.length, 3);
    equal(list.lastElementChild.textContent, 'New book');
});

check('the welcome shows up only once', () => {
    equal(messages.children.length, 1, `found ${messages.children.length} welcome paragraphs`);
});
