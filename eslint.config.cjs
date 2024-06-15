const tseslint = require('typescript-eslint')

module.exports = [
  require('.'),
  {
    files: ['**/*.cjs', '**/*.js', '**/*.ts'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    }
  },
  {
    files: ['eslint.config.cjs'],
    rules: {
      ...tseslint.configs.disableTypeChecked.rules,
      '@typescript-eslint/no-var-requires': 'off'
    },
    languageOptions: { parserOptions: { project: false } }
  },
  {
    ignores: ['lib/']
  }
]
