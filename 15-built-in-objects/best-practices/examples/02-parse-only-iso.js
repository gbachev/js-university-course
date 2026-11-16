// Parse only ISO strings: a date in another format is built from its parts.

// considered bad practice: the engine may not read this format
const guessed = new Date('15/03/2026');
console.log(guessed.getTime()); // NaN

// better: read the parts we know, remember 0-based months
const [day, month, year] = '15/03/2026'.split('/').map(Number);
const parsed = new Date(year, month - 1, day);
console.log(parsed.getDate(), parsed.getMonth()); // 15 2
