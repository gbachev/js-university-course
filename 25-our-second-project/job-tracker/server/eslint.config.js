import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
        },
    },
    // Last, so it switches off any style rules that Prettier handles.
    prettier,
]);
