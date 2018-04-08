export = {
  extends: 'eslint-config-standard',
  parserOptions: {
    ecmaFeatures: {
      // https://github.com/standard/eslint-config-standard/issues/95
      jsx: false
    }
  },
  plugins: [
    'typescript'
  ],
  rules: {
    // https://github.com/nzakas/eslint-plugin-typescript/issues/85
    'space-infix-ops': 'warn',

    // https://github.com/eslint/typescript-eslint-parser/issues/77
    'no-undef': 'off', // TypeScript has this functionality by default
    'no-unused-vars': 'off', // TypeScript has `noUnusedLocals` and `noUnusedParameters`

    'no-useless-constructor': 'warn',
    'typescript/type-annotation-spacing': 'error',
    'typescript/explicit-member-accessibility': 'error',

    'no-array-constructor': 'off', // in favor of TypeScript rule
    'typescript/no-array-constructor': 'error',

    'typescript/explicit-function-return-type': 'error',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
    'typescript/no-unused-vars': 'error',
    'typescript/no-var-requires': 'error',
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/member-delimiter-style': ['error', { delimiter: 'none' }],
    'typescript/no-empty-interface': 'error'
  }
}
