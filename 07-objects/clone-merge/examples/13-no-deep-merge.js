// Neither Object.assign() nor spread merges nested objects: b.config replaces a.config.
let a = { config: { darkMode: true, fontSize: 'medium' } };
let b = { config: { fontSize: 'large' } };

let merged = { ...a, ...b };
console.log(merged); // { config: { fontSize: 'large' } }
