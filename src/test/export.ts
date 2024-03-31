import test from 'ava'
import { type Linter } from 'eslint'
import exported from '..'

test('export', (t): void => {
  const expected: Linter.Config = {
    extends: 'eslint-config-standard',
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true
    },
    rules: {
      'block-spacing': 'off',
      'brace-style': 'off',
      camelcase: 'off',
      'comma-dangle': 'off',
      'comma-spacing': 'off',
      'dot-notation': 'off',
      'func-call-spacing': 'off',
      indent: 'off',
      'key-spacing': 'off',
      'keyword-spacing': 'off',
      'lines-between-class-members': 'off',
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-extra-parens': 'off',
      'no-implied-eval': 'off',
      'no-loss-of-precision': 'off',
      'no-redeclare': 'off',
      'no-throw-literal': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-unused-expressions': 'off',
      'no-useless-constructor': 'off',
      'no-void': ['error', { allowAsStatement: true }],
      'object-curly-spacing': 'off',
      quotes: 'off',
      semi: 'off',
      'space-before-blocks': 'off',
      'space-before-function-paren': 'off',
      'space-infix-ops': 'off',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3
      }],
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/ban-types': ['error', {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string'
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean'
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number'
          },
          Symbol: {
            message: 'Use symbol instead',
            fixWith: 'symbol'
          },
          BigInt: {
            message: 'Use bigint instead',
            fixWith: 'bigint'
          },
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.'
            ].join('\n')
          },
          // object typing
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.'
            ].join('\n')
          },
          '{}': {
            message: [
              '`{}` actually means "any non-nullish value".',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.'
            ].join('\n')
          }
        }
      }],
      '@typescript-eslint/block-spacing': ['error', 'always'],
      '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
      '@typescript-eslint/comma-dangle': ['error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
        enums: 'ignore',
        generics: 'ignore',
        tuples: 'ignore'
      }],
      '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
      '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never'
        }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-exports': ['error', {
        fixMixedExportsWithInlineTypeSpecifier: true
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports'
      }],
      '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true
      }],
      '@typescript-eslint/func-call-spacing': ['error', 'never'],
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
        ignoreComments: false,
        ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        offsetTernaryExpressions: true
      }],
      '@typescript-eslint/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
      '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'comma', requireLast: false }
        }
      ],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': ['error', {
        selector: 'variableLike',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      }],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: false, ignoreVoidOperator: false }],
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-loss-of-precision': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'error',
      '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
      '@typescript-eslint/no-extra-parens': ['error', 'functions'],
      '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
      '@typescript-eslint/no-throw-literal': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true, vars: 'all' }],
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, enums: false, variables: false, typedefs: false }],
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/prefer-return-this-type': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      '@typescript-eslint/restrict-plus-operands': ['error', { skipCompoundAssignments: false }],
      '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/space-before-blocks': ['error', 'always'],
      '@typescript-eslint/space-before-function-paren': ['error', 'always'],
      '@typescript-eslint/space-infix-ops': 'error',
      '@typescript-eslint/strict-boolean-expressions': ['error', {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false
      }],
      '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }]
    }
  }

  t.deepEqual(exported, expected)
})
