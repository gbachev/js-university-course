import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

// Each of these turns a string into HTML. With data from the API in that string,
// a company named <img src=x onerror=...> would run its code on our page.
const htmlProperties = ['innerHTML', 'outerHTML', 'insertAdjacentHTML'].map(
    (property) => ({
        property,
        message:
            'Build elements with a <template> or createElement, and fill them with textContent.',
    }),
);

export default defineConfig([
    globalIgnores(['dist']),
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        files: ['src/**/*.js'],
        rules: {
            'no-restricted-properties': ['error', ...htmlProperties],
        },
    },
    // Last, so it switches off any style rules that Prettier handles.
    prettier,
]);
