# 12. Modules

The module systems of JavaScript: ES modules, CommonJS, the older AMD and UMD formats, and loading modules on demand with `import()`.

Most examples here are folders of several files that import each other, so we run the `main.js` (or `main.cjs`, or the file its README names) inside them. The repository's package.json has `"type": "module"`: Node treats a `.js` file as an ES module, and a `.cjs` file as CommonJS.

1. Section Overview (no code)
2. [ES Modules](es-modules) - named and default exports, re-exports, live bindings, a module runs once, modules in the browser
3. [CommonJS](commonjs) - `require()` and `module.exports`, the `exports` trap, copies instead of live bindings, and mixing the two formats
4. [AMD and UMD](amd-umd) - `define()` for RequireJS, and the UMD wrapper that runs in Node and in a plain script tag
5. [Dynamic Loading](dynamic-loading) - `import()` and its promise, conditional loading, loading on a click, and a failed load
6. [Best Practices](best-practices) - named exports, no side effects on import, full paths, and a `.catch()` for every `import()`
7. Section Review (no code)
