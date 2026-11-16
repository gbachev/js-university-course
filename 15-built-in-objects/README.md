# 15. Built-in Objects

Four built-ins that almost every application needs (`JSON` for data, `Date` for time, `RegExp` for patterns in text and `Intl` for showing values to people), and `Proxy` with `Reflect` to step in when code reads or changes an object.

1. Section Overview (no code)
2. [JSON](json) - `JSON.stringify()` with replacers and `toJSON()`, `JSON.parse()` with a reviver, and invalid input
3. [Dates and Times](dates-and-times) - timestamps, 0-based months, local time vs UTC, parsing pitfalls, date arithmetic and the DST trap
4. [Regular Expressions](regular-expressions) - patterns and flags, validating, `match()`, `matchAll()` with named groups, `replace()`, `lastIndex` and escaping
5. [The Intl API](intl) - numbers, currencies, dates, relative time, plurals, lists and sorting for each locale
6. [Proxy and Reflect](proxy-reflect) - traps that validate writes, fill in defaults, refuse changes and re-render a store, with `Reflect` as the default behavior
7. [Best Practices](best-practices) - checked JSON, ISO dates, new dates instead of changed ones, small regexes and comparing values instead of formatted text
8. Section Review (no code)
