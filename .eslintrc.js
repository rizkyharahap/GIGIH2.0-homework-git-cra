module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'space-before-blocks': 'error',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
