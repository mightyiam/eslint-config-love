import configStandard from './eslint-config-standard'
import { Linter } from 'eslint'

const equivalents = [
  'comma-spacing',
  'dot-notation',
  'brace-style',
  'func-call-spacing',
  'indent',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-throw-literal',
  'no-unused-vars',
  'no-unused-expressions',
  'no-useless-constructor',
  'quotes',
  'semi',
  'space-before-function-paren'
] as const

const ruleFromStandard = (name: string): Linter.RuleEntry => {
  if (configStandard.rules === undefined) throw new Error()
  const rule = configStandard.rules[name]
  if (rule === undefined) throw new Error()
  if (typeof rule !== 'object') return rule
  return JSON.parse(JSON.stringify(rule))
}

function fromEntries<T> (iterable: Array<[string, T]>): { [key: string]: T } {
  return [...iterable].reduce<{ [key: string]: T }>((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})
}

const config: Linter.Config = {
  extends: 'eslint-config-standard',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        // TypeScript has this functionality by default:
        'no-undef': 'off',

        // Rules replaced by @typescript-eslint versions:
        ...fromEntries(equivalents.map((name) => [name, 'off'])),
        camelcase: 'off',
        'default-param-last': 'off',
        'no-use-before-define': 'off',

        // @typescript-eslint versions of Standard.js rules:
        ...fromEntries(equivalents.map((name) => [`@typescript-eslint/${name}`, ruleFromStandard(name)])),
        '@typescript-eslint/no-use-before-define': ['error', {
          functions: false,
          classes: false,
          enums: false,
          variables: false,
          typedefs: false // Only the TypeScript rule has this option.
        }],

        // Rules exclusive to Standard TypeScript:
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true
        }],
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
          format: ['camelCase', 'UPPER_CASE']
        }],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
        '@typescript-eslint/return-await': ['error', 'always'],
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
        '@typescript-eslint/type-annotation-spacing': 'error'
      }
    }
  ]
}

export = config
