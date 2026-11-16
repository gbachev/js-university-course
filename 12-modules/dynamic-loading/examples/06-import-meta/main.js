// Run with: node 12-modules/dynamic-loading/examples/06-import-meta/main.js
// The paths depend on where the repository is on our computer.
console.log(import.meta.url); // file:///.../06-import-meta/main.js

// The full URL of a relative path, resolved against this module, without loading it.
console.log(import.meta.resolve('./locales/de.js'));
// file:///.../06-import-meta/locales/de.js

console.log(import.meta.filename); // /.../06-import-meta/main.js
console.log(import.meta.dirname); // /.../06-import-meta
