module.exports = {
    env: {
      node: true,
      jest: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn'
    }
  };