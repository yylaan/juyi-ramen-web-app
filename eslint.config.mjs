import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['airbnb', 'airbnb-typescript', 'prettier', 'next'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.eslint.json',
      tsconfigRootDir: __dirname,
      ecmaFeatures: {
        jsx: true,
      },
      exclude: ['eslint.config.mjs'],
    },
    ignorePatterns: ['node_modules', '.next', 'public', 'tsconfig.json', 'eslint.config.mjs'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  }),
]

export default eslintConfig
