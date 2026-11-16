import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    globalIgnores(['dist']),
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    // Last, so it switches off any style rules that Prettier handles.
    prettier,
]);
