import { check, equal, ok, source } from '/lib/browser-check.js';

const { addPriceTag } = await import(source('01-price-tag.js'));
const host = document.querySelector('#tag');
let price;

check('addPriceTag runs without an error', () => {
    addPriceTag(host, 32.5);
});
price = host.shadowRoot?.querySelector('.price');

check('the host has an open shadow root', () => {
    ok(host.shadowRoot, 'host.shadowRoot is null');
    equal(host.shadowRoot.mode, 'open');
});

check('the price tag shows the price with two decimals', () => {
    ok(price, 'there is no .price element in the shadow root');
    equal(price.textContent, '32.50 EUR');
});

check('the price lives in the shadow tree, not on the page', () => {
    equal(host.children.length, 0);
    equal(document.querySelector('.price'), null);
});

check('the page rules for p and .price do not reach the tag', () => {
    ok(price, 'there is no .price element in the shadow root');
    equal(getComputedStyle(price).color, 'rgb(0, 0, 0)');
    equal(getComputedStyle(price).fontSize, '16px');
});

check('the style inside the shadow tree makes the price bold', () => {
    ok(price, 'there is no .price element in the shadow root');
    equal(getComputedStyle(price).fontWeight, '700');
});
