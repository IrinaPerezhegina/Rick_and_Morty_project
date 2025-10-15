import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      prettier: eslintPluginPrettier,
      import: importPlugin
    },
    rules: {
      ...eslintPluginPrettier.rules,
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '^react$',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '^react-router$',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '^(memo|useMemo)$',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '^@/(shared|widgets|pages|App|app|entities)$',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '^@/assets/$',
              group: 'internal',
              position: 'before'
            },

            {
              pattern: '^\\.\\.\\/\\.^\\./components$', // ../../components
              group: 'parent',
              position: 'before'
            },

            {
              pattern: '^\\.\\/.*\\.css$',
              group: 'sibling',
              position: 'before'
            },
            { pattern: '^[./]', group: 'sibling', position: 'after' }
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external']
        }
      ]
    }
  }
]);
