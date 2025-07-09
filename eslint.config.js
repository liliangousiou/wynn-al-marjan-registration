import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    ignores: ['node_modules', 'dist', 'build', '.vscode', '*.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // 💡 Χρησιμοποιούμε μόνο αυτό για sorting
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 📦 NPM packages
            ['^react', '^@?\\w'],
            // 🏷️ Alias imports (π.χ. constants, components, utils κ.λπ.)
            [
              '^constants',
              '^components',
              '^hooks',
              '^pages',
              '^styles',
              '^types',
              '^utils',
              '^assets',
            ],
            // 🧭 Relative imports
            ['^\\.\\.\\.', '^\\.\\./', '^\\./'],
            // 🔚 Side effect imports
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },
];
