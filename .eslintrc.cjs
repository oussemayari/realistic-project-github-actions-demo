// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      // optional but helps parser understand JSX transforms
      presets: ['@babel/preset-react']
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect' // automatically picks React version
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error'
    // add/adjust rules as needed
  },
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      // ensure JSX is parsed in these files (already set above but keep for clarity)
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    {
      files: ['**/*.test.{js,jsx}'],
      env: { jest: true }
    }
  ]
};