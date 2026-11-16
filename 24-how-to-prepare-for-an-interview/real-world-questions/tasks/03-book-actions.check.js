import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { handleBookActions } = await import(source('03-book-actions.js'));

// Every check gets a fresh copy of the list, so the listeners of one check do not
// reach the next one.
function freshList() {
    const list = document.querySelector('#books').cloneNode(true);
    list.removeAttribute('id');
    list.hidden = true;
    document.body.append(list);
    return list;
}

function setup() {
    const list = freshList();
    const actions = [];
    const stop = handleBookActions(list, (action, id) => actions.push(`${action} ${id}`));
    return { list, actions, stop };
}

check('a click on a button calls onAction with its action and the book id', () => {
    const { list, actions } = setup();
    list.querySelector('[data-id="42"] button').click();
    deepEqual(actions, ['favorite 42']);
});

check('a click on the text inside a button counts as a click on the button', () => {
    const { list, actions } = setup();
    list.querySelector('[data-id="41"] span').click();
    deepEqual(actions, ['remove 41']);
});

check('a click on the book outside its button does nothing', () => {
    const { list, actions } = setup();
    list.querySelector('[data-id="41"]').click();
    list.click();
    deepEqual(actions, []);
});

check('a book added after the setup works too', () => {
    const { list, actions } = setup();
    const item = document.createElement('li');
    item.dataset.id = '43';
    item.innerHTML = 'Neuromancer <button data-action="remove">Remove</button>';
    list.append(item);
    item.querySelector('button').click();
    deepEqual(actions, ['remove 43']);
});

check('the returned function removes the listener', () => {
    const { list, actions, stop } = setup();
    equal(typeof stop, 'function', 'handleBookActions should return a function');
    stop();
    list.querySelector('[data-id="42"] button').click();
    deepEqual(actions, []);
});
