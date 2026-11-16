import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    // Not in the lecture's snippet: without it, the second npm run check lints dist/.
    globalIgnores(['dist']),
    js.configs.recommended,
    // as if a shared config asked for double quotes
    { rules: { quotes: ['error', 'double'] } },
    // last, so it switches off that rule and every other one like it
    prettier,
]);
