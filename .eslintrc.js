module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier',
    '@vue/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      },
    ],
    'space-before-function-paren': [
      2,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'no-unused-vars': 'off',
  },
}
