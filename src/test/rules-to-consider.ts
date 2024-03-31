import test from 'ava'
import { rules as typescriptEslintRules } from '@typescript-eslint/eslint-plugin'
import { equivalents, ourRules } from './_util'
import configStandard from '../eslint-config-standard'

// Some of these rules may have been considered but the reason for their exclusion
// is not captured here.
// This serves as a todo list and should ideally eventually end up empty
// and then fail upon plugin upgrades where new rules are released.
const notYetConsideredRules: string[] = [
  'explicit-member-accessibility',
  'explicit-module-boundary-types',
  'member-ordering',
  'no-confusing-non-null-assertion',
  'no-duplicate-enum-values',
  'no-duplicate-type-constituents',
  'no-explicit-any',
  'no-implicit-any-catch',
  'no-import-type-side-effects',
  'no-inferrable-types',
  'no-meaningless-void-operator',
  'no-mixed-enums',
  'no-non-null-asserted-nullish-coalescing',
  'no-parameter-properties',
  'no-redundant-type-constituents',
  'no-require-imports',
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
  'no-useless-empty-export',
  'parameter-properties',
  'prefer-as-const',
  'prefer-enum-initializers',
  'prefer-for-of',
  'prefer-literal-enum-member',
  'prefer-namespace-keyword',
  'prefer-readonly-parameter-types',
  'prefer-regexp-exec',
  'prefer-string-starts-ends-with',
  'sort-type-constituents',
  'sort-type-union-intersection-members',
  'switch-exhaustiveness-check',
  'typedef',
  'unified-signatures'
]

const equivalentsNotUsedUpstream = equivalents
  .filter(name => !Object.prototype.hasOwnProperty.call(configStandard.rules, name))

test('all plugin rules are considered', (t) => {
  const intentionallyExcludedRules: string[] = [
  ]
  const assertNotInOurRules = (rule: string): void => {
    const typescriptRule = `@typescript-eslint/${rule}`
    t.false(Object.keys(ourRules).includes(typescriptRule), `Actually, the rule ${typescriptRule} is included!`)
  }
  intentionallyExcludedRules.forEach(assertNotInOurRules)
  notYetConsideredRules.forEach(assertNotInOurRules)
  notYetConsideredRules.forEach((rule) => {
    t.false(equivalentsNotUsedUpstream.includes(rule), `the equivalent rule ${rule} should not be considered because it is not used upstream`)
  })
  const inexplicablyExcludedRules = Object.keys(typescriptEslintRules)
    .filter((rule) => {
      const typescriptRule = `@typescript-eslint/${rule}`
      return !Object.keys(ourRules).includes(typescriptRule) &&
        !intentionallyExcludedRules.includes(rule) &&
        !equivalentsNotUsedUpstream.includes(rule) &&
        !notYetConsideredRules.includes(rule)
    })
  t.deepEqual(inexplicablyExcludedRules, [], 'rules inexplicably excluded')
})
