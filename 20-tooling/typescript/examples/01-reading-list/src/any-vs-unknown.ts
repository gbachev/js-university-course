// any switches the checker off; unknown makes us check first.
const saved = '[{"title":"Dune","read":false}]';

const loose: any = JSON.parse(saved);
console.log(loose[0].titel); // undefined

const data: unknown = JSON.parse(saved);
if (Array.isArray(data)) {
    console.log(data.length); // 1
}
