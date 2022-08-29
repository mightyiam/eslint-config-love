import configStandard from './eslint-config-standard'
import { Linter } from 'eslint'

const isOff = (value: unknown): value is 'off' | 0 => value === 'off' || value === 0

type Converter = (name: string, level: Linter.RuleLevel, options: any[]) => null | [string, Linter.RuleLevelAndOptions]
type Method = 'passthru' | 'exclude' | Converter

const equivalents: Record<string, Method> = {
  // ## Rules to pass through
  'brace-style': 'passthru',
  'comma-dangle': 'passthru',
  'comma-spacing': 'passthru',
  'default-param-last': 'passthru',
  'dot-notation': 'passthru',
  'func-call-spacing': 'passthru',
  indent: 'passthru',
  'init-declarations': 'passthru',
  'keyword-spacing': 'passthru',
  'lines-between-class-members': 'passthru',
  'no-array-constructor': 'passthru',
  'no-dupe-class-members': 'passthru',
  'no-empty-function': 'passthru',
  'no-extra-parens': 'passthru',
  'no-extra-semi': 'passthru',
  'no-implied-eval': 'passthru',
  'no-invalid-this': 'passthru',
  'no-loop-func': 'passthru',
  'no-loss-of-precision': 'passthru',
  'no-magic-numbers': 'passthru',
  'no-redeclare': 'passthru',
  'no-restricted-imports': 'passthru',
  'no-shadow': 'passthru',
  'no-throw-literal': 'passthru',
  'no-unused-expressions': 'passthru',
  'no-unused-vars': 'passthru',
  'no-useless-constructor': 'passthru',
  'object-curly-spacing': 'passthru',
  'padding-line-between-statements': 'passthru',
  quotes: 'passthru',
  'require-await': 'passthru',
  semi: 'passthru',
  'space-before-blocks': 'passthru',
  'space-before-function-paren': 'passthru',
  'space-infix-ops': 'passthru',
  // ## Rules that require additional conversion
  // TS Standard adds typedefs and lets TypeScript handle some other kinds.
  'no-use-before-define': (name, level, options) => {
    if (isOff(level)) {
      return null
    }

    const original = typeof options?.[0] === 'object' ? (options[0] ?? { }) : { }
    const converted = {
      ...original,
      functions: false,
      classes: false,
      enums: false,
      variables: false,
      // Only the TypeScript rule has this option.
      typedefs: false
    }

    return [`@typescript-eslint/${name}`, [level, converted]]
  },
  // `no-return-await` is replaced by `@typescript-eslint/return-await`
  'no-return-await': (_, level) => {
    // `no-return-await` acts like the `@typescript-eslint` version with the options of `in-try-catch`
    return isOff(level) ? null : ['@typescript-eslint/return-await', [level, 'in-try-catch']]
  },
  // ## Rules that should be excluded
  // TypeScript plug-in replaces this with `@typescript/naming-convention`
  camelcase: 'exclude',
  // TypeScript has this functionality by default:
  'no-undef': 'exclude'
} as const

const jsonClone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T

const parseRule = (name: string, config: Linter.RuleEntry): [name: string, level: Linter.RuleLevel, options: any] => {
  if (typeof config === 'string' || typeof config === 'number') {
    return [name, config, null]
  }

  const [level, ...options] = jsonClone(config)

  return [name, level, options]
}

const propagate = (rules: Partial<Linter.RulesRecord>): Linter.RulesRecord => {
  const result: Linter.RulesRecord = { }

  for (const [name, method] of Object.entries(equivalents)) {
    const original = rules[name]
    if (original != null) {
      if (method === 'passthru') {
        result[name] = 'off'
        result[`@typescript-eslint/${name}`] = jsonClone(original)
      }

      if (method === 'exclude') {
        result[name] = 'off'
      }

      if (typeof method === 'function') {
        const args = parseRule(name, original)
        const converted = method(...args)
        if (converted != null) {
          result[name] = 'off'
          result[converted[0]] = converted[1]
        }
      }
    }
  }

  return result
}

// const ruleFromStandard = (name: string): Linter.RuleEntry => {
//   if (configStandard.rules === undefined) throw new Error()
//   const rule = configStandard.rules[name]
//   if (rule === undefined) throw new Error()
//   if (typeof rule !== 'object') return rule
//   return JSON.parse(JSON.stringify(rule))
// }

// function fromEntries<T> (iterable: Array<[string, T]>): { [key: string]: T } {
//   return [...iterable].reduce<{ [key: string]: T }>((obj, [key, val]) => {
//     obj[key] = val
//     return obj
//   }, {})
// }

const config: Linter.Config = {
  extends: 'eslint-config-standard',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        // Propagate rules from Standard that have TypeScript equivalents
        ...propagate(configStandard.rules ?? { }),

        // // TypeScript has this functionality by default:
        // 'no-undef': 'off',

        // // Rules replaced by @typescript-eslint versions:
        // ...fromEntries(equivalents.map((name) => [name, 'off'])),
        // camelcase: 'off',
        // 'no-use-before-define': 'off',

        // @typescript-eslint versions of Standard.js rules:
        // ...fromEntries(equivalents.map((name) => [`@typescript-eslint/${name}`, ruleFromStandard(name)])),
        // '@typescript-eslint/no-use-before-define': ['error', {
        //   functions: false,
        //   classes: false,
        //   enums: false,
        //   variables: false,
        //   typedefs: false // Only the TypeScript rule has this option.
        // }],

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
          format: ['camelCase', 'PascalCase', 'UPPER_CASE']
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
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
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
        '@typescript-eslint/type-annotation-spacing': 'error',
        'no-void': ['error', { allowAsStatement: true }]
      }
    }
  ]
}

export = config
