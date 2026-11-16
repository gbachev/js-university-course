// The default sort() vs Intl.Collator for English and Swedish.
const cities = [
    'Zürich', 'Berlin', 'Évora', 'Århus', 'Oslo', 'Örebro'
];

console.log([...cities].sort());
// [ 'Berlin', 'Oslo', 'Zürich', 'Århus', 'Évora', 'Örebro' ]

console.log([...cities].sort(new Intl.Collator('en').compare));
// [ 'Århus', 'Berlin', 'Évora', 'Örebro', 'Oslo', 'Zürich' ]

console.log([...cities].sort(new Intl.Collator('sv').compare));
// [ 'Berlin', 'Évora', 'Oslo', 'Zürich', 'Århus', 'Örebro' ]
