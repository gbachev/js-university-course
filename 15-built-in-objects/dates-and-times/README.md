# Dates and Times

Code for the lecture *Dates and Times* (section 15, Built-in Objects) of the JavaScript course at gbachev.com.

The examples that print local time set `process.env.TZ = 'Europe/Sofia'` in their first lines, so they print the same on every machine. Remove that line to see the output for your own time zone.

## Examples
- `examples/01-timestamps.js` - a `Date` is the milliseconds since the Unix epoch
- `examples/02-creating-dates.js` - a date for now, from a timestamp and from an ISO string
- `examples/03-components-and-months.js` - a date from its components, 0-based months, `getDate()` vs `getDay()` and setters
- `examples/04-local-vs-utc.js` - the `get*` and `getUTC*` methods, `toISOString()` and `getTimezoneOffset()`
- `examples/05-parsing-pitfalls.js` - date-only vs date and time strings, a format the engine guesses, and Invalid Date
- `examples/06-comparing-and-subtracting.js` - `<` and `>` on dates, subtracting them, and equality with `getTime()`
- `examples/07-adding-days-dst.js` - `setDate()` for calendar days vs adding 24 hours across a DST switch
- `examples/08-temporal.js` - a monthly renewal with `Date` and with `Temporal` (Temporal only where the runtime has it, not in Node 22)

Run one with `node 15-built-in-objects/dates-and-times/examples/01-timestamps.js` from the repository folder.

## Tasks
1. **Add days without changing the date** (`tasks/01-add-days.js`) - return a new date some calendar days later, leaving the original as it was
2. **Oldest order first** (`tasks/02-oldest-order-first.js`) - fix a sort by date that uses the wrong compare function and changes the caller's array
3. **Read a typed date** (`tasks/03-read-a-typed-date.js`) - turn `DD.MM.YYYY` into a `Date`, and reject dates that roll over

Run the tests with `npm test -- 15-built-in-objects/dates-and-times`. They fail until the task is solved. Compare with `solutions/` after you try.
