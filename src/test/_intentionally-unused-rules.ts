import { TSESLint } from '@typescript-eslint/utils'
import tseslintUsage from '../plugin-usage/typescript-eslint.js'

export const intentionallyUnusedRules: string[] = [
  // ## Incompatible with JS

  // From rule documentation:
  // > If you are working on a codebase within which you lint non-TypeScript code (i.e. `.js`/`.mjs`/`.cjs`/`.jsx`), you should ensure that you should use [ESLint `overrides`](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) to only enable the rule on `.ts`/`.mts`/`.cts`/`.tsx` files. If you don't, then you will get unfixable lint errors reported within `.js`/`.mjs`/`.cjs`/`.jsx` files.
  '@typescript-eslint/explicit-member-accessibility',

  // ## "too much"

  '@typescript-eslint/default-param-last',
  'default-param-last',

  '@typescript-eslint/member-ordering',

  '@typescript-eslint/no-shadow',
  'no-shadow',

  '@typescript-eslint/parameter-properties',

  '@typescript-eslint/prefer-enum-initializers',

  'no-bitwise',

  'no-continue',

  'func-names',

  'func-style',

  'max-classes-per-file',

  // ## redundant

  // Covered by `imports/no-duplicates`
  'no-duplicate-imports',

  // Covered by `@typescript-eslint/naming-convention`
  'id-match',

  // Covered by TypeScript
  'getter-return',

  //  TS strict mode and `@typescript-eslint/explicit-function-return-type`
  '@typescript-eslint/explicit-module-boundary-types',

  // From rule documentation:
  // > If possible, it is recommended to use tsconfig's noImplicitReturns option rather than this rule. noImplicitReturns is powered by TS's type information and control-flow analysis so it has better coverage than this rule.
  '@typescript-eslint/consistent-return',
  'consistent-return',

  // From rule documentation:
  // > Requiring type annotations unnecessarily can be cumbersome to maintain and generally reduces code readability. TypeScript is often better at inferring types than easily written type annotations would allow.
  // >
  // > Instead of enabling typedef, it is generally recommended to use the --noImplicitAny and --strictPropertyInitialization compiler options to enforce type annotations only when useful.
  '@typescript-eslint/typedef',

  // Covered by strict TypeScript
  '@typescript-eslint/no-invalid-this',

  // Covered by TypeScript
  'no-redeclare',
  '@typescript-eslint/no-redeclare',

  // Covered by `no-var`
  'block-scoped-var',

  // Covered by `@typescript-eslint/naming-convention`
  'camelcase',

  // Covered by `@typescript-eslint/switch-exhaustiveness-check`
  'default-case',

  // Covered by `@typescript-eslint/only-throw-error`
  'no-throw-literal',

  // Covered by TypeScript
  'promise/always-return',

  // Covered by `@typescript-eslint/no-floating-promises`
  'promise/catch-or-return',

  // Covered by `complexity`
  'max-lines-per-function',
  'max-statements',

  // Did this ever actually happen to someone?
  'no-div-regex',

  ...[
    ...new TSESLint.Linter({ configType: 'eslintrc' }).getRules().keys(),
  ].filter((name) => Object.hasOwn(tseslintUsage.rules, name)),

  // ## Project specific

  '@typescript-eslint/no-restricted-imports',

  '@typescript-eslint/no-restricted-types',

  '@typescript-eslint/prefer-readonly-parameter-types',

  'eslint-comments/no-restricted-disable',

  'eslint-comments/no-use',

  'func-name-matching',

  'id-denylist',

  'id-length',

  'n/no-restricted-import',

  'n/no-restricted-require',

  'no-restricted-imports',

  // ## Complicated

  // Rule is too simple
  'capitalized-comments',

  // Rule docs claim implementation hacky
  'eslint-comments/no-unused-disable',

  // Conflicts with `@typescript-eslint/init-declarations`
  // https://github.com/mightyiam/eslint-config-love/issues/1710
  'no-undef-init',

  // Implemented using a blacklist of function names
  'promise/no-callback-in-promise',
]
