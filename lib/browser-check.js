// A tiny checker for the tasks that run in the browser. Every check shows a pass or a fail
// in a list at the bottom of the page and in the console.
//
//   import { check, equal } from '/lib/browser-check.js';
//   check('the list has three items', () => equal(document.querySelectorAll('li').length, 3));
//
// Open the page through `npm run serve`. Add ?solutions to the address to run the checks
// against the solution instead of our own code.

let list;
let passed = 0;
let total = 0;
let summary;

function report(name, error) {
    if (!list) {
        const box = document.createElement('section');
        box.setAttribute('aria-label', 'Checks');
        box.style.cssText = 'margin-top:2rem;padding:1rem;border:1px solid #ccc;font:14px/1.5 system-ui,sans-serif';
        summary = document.createElement('p');
        summary.style.fontWeight = '600';
        list = document.createElement('ul');
        box.append(summary, list);
        document.body.append(box);
    }
    total += 1;
    if (!error) passed += 1;
    const item = document.createElement('li');
    item.dataset.check = error ? 'fail' : 'pass';
    item.textContent = error ? `FAIL ${name}: ${error.message}` : `PASS ${name}`;
    item.style.color = error ? '#b3261e' : '#1b6e3a';
    list.append(item);
    summary.textContent = `${passed} of ${total} checks pass`;
    summary.dataset.passed = String(passed);
    summary.dataset.total = String(total);
    (error ? console.error : console.log)(item.textContent);
}

export async function check(name, fn) {
    try {
        await fn();
        report(name);
    } catch (error) {
        report(name, error);
    }
}

export function equal(actual, expected, message) {
    if (!Object.is(actual, expected)) {
        throw new Error(message ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
}

export function deepEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(message ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
}

export function ok(value, message) {
    if (!value) {
        throw new Error(message ?? `expected a truthy value, got ${JSON.stringify(value)}`);
    }
}

// Loads our code from tasks/, or the solution when the address ends with ?solutions.
export function source(file) {
    const fromSolutions = new URLSearchParams(location.search).has('solutions');
    return fromSolutions ? `../solutions/${file}` : `./${file}`;
}
