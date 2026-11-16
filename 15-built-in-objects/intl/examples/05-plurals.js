// PluralRules picks the category, and we map it to our own words.
const rules = new Intl.PluralRules('en-US');
const words = { one: 'item', other: 'items' };

function cartLabel(count) {
    return `${count} ${words[rules.select(count)]}`;
}

console.log(rules.select(1)); // one
console.log(rules.select(5)); // other
console.log(cartLabel(1)); // 1 item
console.log(cartLabel(5)); // 5 items
console.log(cartLabel(0)); // 0 items

console.log(new Intl.PluralRules('pl').select(2)); // few
