// Created once and reused for every call.
const rules = new Intl.PluralRules('en-US');
const numbers = new Intl.NumberFormat('en-US');
const words = { one: 'review', other: 'reviews' };

export function reviewsLabel(count) {
    if (count === 0) {
        return 'No reviews yet';
    }
    return `${numbers.format(count)} ${words[rules.select(count)]}`;
}
