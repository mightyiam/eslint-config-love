import test from 'ava'
import { rules as typescriptEslintRules } from '@typescript-eslint/eslint-plugin'
import { ourRules } from './_util'

// Some of these rules may have been considered but the reason for their exclusion
// is not captured here.
// This serves as a todo list and should ideally eventually end up empty
// and then fail upon plugin upgrades where new rules are released.
const notYetConsideredRules: string[] = [
  'class-methods-use-this',
  'consistent-return',
  'default-param-last',
  'explicit-member-accessibility',
  'explicit-module-boundary-types',
  'init-declarations',
  'lines-around-comment',
  'max-params',
  'member-ordering',
  'no-array-delete',
  'no-confusing-non-null-assertion',
  'no-duplicate-enum-values',
  'no-duplicate-type-constituents',
  'no-empty-function',
  'no-explicit-any',
  'no-extra-semi',
  'no-implicit-any-catch',
  'no-import-type-side-effects',
  'no-inferrable-types',
  'no-invalid-this',
  'no-loop-func',
  'no-magic-numbers',
  'no-meaningless-void-operator',
  'no-mixed-enums',
  'no-non-null-asserted-nullish-coalescing',
  'no-parameter-properties',
  'no-redundant-type-constituents',
  'no-require-imports',
  'no-restricted-imports',
  'no-shadow',
  'no-type-alias',
  'no-unnecessary-condition',
  'no-unnecessary-qualifier',
  'no-unnecessary-type-arguments',
  'no-unsafe-assignment',
  'no-unsafe-call',
  'no-unsafe-declaration-merging',
  'no-unsafe-enum-comparison',
  'no-unsafe-member-access',
  'no-unsafe-return',
  'no-unsafe-unary-minus',
  'no-useless-empty-export',
  'no-useless-template-literals',
  'only-throw-error',
  'padding-line-between-statements',
  'parameter-properties',
  'prefer-as-const',
  'prefer-destructuring',
  'prefer-enum-initializers',
  'prefer-find',
  'prefer-for-of',
  'prefer-literal-enum-member',
  'prefer-namespace-keyword',
  'prefer-readonly-parameter-types',
  'prefer-regexp-exec',
  'prefer-string-starts-ends-with',
  'require-await',
  'sort-type-constituents',
  'sort-type-union-intersection-members',
  'switch-exhaustiveness-check',
  'typedef',
  'unified-signatures',
  'use-unknown-in-catch-callback-variable'
]

test('all plugin rules are considered', (t) => {
  const intentionallyExcludedRules: string[] = [
  ]
  const assertNotInOurRules = (rule: string): void => {
    const typescriptRule = `@typescript-eslint/${rule}`
    t.false(Object.keys(ourRules).includes(typescriptRule), `Actually, the rule ${typescriptRule} is included!`)
  }
  intentionallyExcludedRules.forEach(assertNotInOurRules)
  notYetConsideredRules.forEach(assertNotInOurRules)
  const inexplicablyExcludedRules = Object.keys(typescriptEslintRules)
    .filter((rule) => {
      const typescriptRule = `@typescript-eslint/${rule}`
      return !Object.keys(ourRules).includes(typescriptRule) &&
        !intentionallyExcludedRules.includes(rule) &&
        !notYetConsideredRules.includes(rule)
    })
  t.deepEqual(inexplicablyExcludedRules, [], 'rules inexplicably excluded')
})
