export = {
  extends: 'eslint-config-standard',
  parserOptions: {
    ecmaFeatures: {
      // https://github.com/standard/eslint-config-standard/issues/95
      jsx: false
    }
  },
  plugins: ['typescript'],
  rules: {
    'camelcase': ['warn', { properties: 'never' }], // https://github.com/mightyiam/eslint-config-standard-with-typescript/issues/3
    'no-array-constructor': 'off', // in favor of TypeScript rule
    'no-undef': 'off', // TypeScript has this functionality by default
    'no-unused-vars': 'off', // TypeScript has `noUnusedLocals` and `noUnusedParameters`
    'no-useless-constructor': 'warn', // https://github.com/mightyiam/eslint-config-standard-with-typescript/issues/2
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/explicit-function-return-type': 'error',
    'typescript/explicit-member-accessibility': 'error',
    'typescript/member-delimiter-style': ['error', { delimiter: 'none' }],
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-unused-vars': 'error',
    'typescript/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
    'typescript/no-var-requires': 'error',
    'typescript/type-annotation-spacing': 'error'
  }
}
