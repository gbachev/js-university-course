# The Intl API

Code for the lecture *The Intl API* (section 15, Built-in Objects) of the JavaScript course at gbachev.com.

The output comments were checked in Node 22, which ships full locale data (ICU). Some spaces in the output are non-breaking (U+00A0 or U+202F), and a browser or another Node version may print a different space or slightly different text.

## Examples
- `examples/01-numbers-and-currencies.js` - one price in euros for the US, Germany and Bulgaria
- `examples/02-percent-compact-unit.js` - percentages, compact numbers and units
- `examples/03-dates-and-times.js` - `Intl.DateTimeFormat` with styles, time zones and single parts
- `examples/04-relative-time.js` - "3 days ago" and "in 2 hours" with `Intl.RelativeTimeFormat`
- `examples/05-plurals.js` - `Intl.PluralRules` for "1 item" and "5 items"
- `examples/06-lists.js` - `Intl.ListFormat` with "and" and "or"
- `examples/07-sorting-by-locale.js` - the default `sort()` vs `Intl.Collator` in English and Swedish
- `examples/08-create-once.js` - `toLocaleString()` for one value, one formatter reused for a list

Run one with `node 15-built-in-objects/intl/examples/01-numbers-and-currencies.js` from the repository folder.

## Tasks
1. **The cart total** (`tasks/01-cart-total.js`) - add up a cart and show the total in the customer's locale and currency
2. **The date on the receipt** (`tasks/02-receipt-date.js`) - format the order date for the customer's language and time zone
3. **How many reviews?** (`tasks/03-reviews-label.js`) - "No reviews yet", "1 review" or "1,250 reviews" with `Intl.PluralRules`

Run the tests with `npm test -- 15-built-in-objects/intl`. They fail until the task is solved. Compare with `solutions/` after you try.
