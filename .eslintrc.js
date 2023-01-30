module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: ['prettier', 'react-app', 'react-app/jest'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: [2, 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
