export = {
  parser: '@typescript-eslint/parser',
  extends: 'eslint-config-standard',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript has this functionality by default:
        'no-undef': 'off',

        // Rules replaced by @typescript-eslint versions:
        camelcase: 'off',
        indent: 'off',
        'no-array-constructor': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',

        // @typescript-eslint versions of Standard.js rules:
        '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
        '@typescript-eslint/indent': ['error', 2, {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false
        }],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
        '@typescript-eslint/no-useless-constructor': 'error',

        // New Typescript-only rules:
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', 'array-simple'],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: { delimiter: 'none' },
            singleline: { delimiter: 'comma', requireLast: false }
          }
        ],
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-object-literal-type-assertion': 'error',
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/no-triple-slash-reference': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-interface': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error'
      }
    }
  ]
}
