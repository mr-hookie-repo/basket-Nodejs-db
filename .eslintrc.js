module.exports = {
    env: {
      node: true,
      es2021: true,
      jest: true,
    },
    extends: ['eslint:recommended', 'plugin:node/recommended'],
    parserOptions: {
      ecmaVersion: 12,
    },
    rules: {
      // Add custom rules here
    },
  };