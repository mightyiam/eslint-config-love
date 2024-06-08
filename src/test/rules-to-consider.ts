import test from 'ava'
import pluginTseslint from '@typescript-eslint/eslint-plugin'
import * as pluginN from 'eslint-plugin-n'
import * as pluginImport from 'eslint-plugin-import'
import * as pluginPromise from 'eslint-plugin-promise'
import { ourRules } from './_util'
import _ from 'lodash'
import { TSESLint } from '@typescript-eslint/utils'

if (pluginN === undefined) throw new Error()
if (pluginImport === undefined) throw new Error()
if (pluginPromise === undefined) throw new Error()

const eslintRules = (new TSESLint.Linter()).getRules()

if (pluginN.rules === undefined) throw new Error()
if (pluginImport.rules === undefined) throw new Error()
if (pluginPromise.rules === undefined) throw new Error()

const rulesets: Array<[TSESLint.Linter.Plugin, string]> = [
  [pluginTseslint.rules, '@typescript-eslint'],
  [pluginN.rules, 'n'],
  [pluginImport.rules, 'import'],
  [pluginPromise.rules, 'promise']
]

const knownRules = new Map([
  ...eslintRules.entries(),
  ...rulesets.flatMap(([rules, pkgName]) => Object.entries(rules).map(([name, rule]) => [`${pkgName}/${name}`, rule as unknown] as const))
])

const deprecatedKnownRules = [...knownRules.entries()]
  .filter(([_name, rule_]) => {
    const rule = rule_ as ({ meta?: { deprecated?: boolean } })
    const meta = rule.meta
    if (meta === undefined) return false
    return meta.deprecated === true
  })
  .map(([name, _rule]) => name)

const notYetConsideredRules = [
  '@typescript-eslint/class-methods-use-this',
  '@typescript-eslint/consistent-return',
  '@typescript-eslint/default-param-last',
  '@typescript-eslint/explicit-member-accessibility',
  '@typescript-eslint/explicit-module-boundary-types',
  '@typescript-eslint/init-declarations',
  '@typescript-eslint/lines-around-comment',
  '@typescript-eslint/max-params',
  '@typescript-eslint/member-ordering',
  '@typescript-eslint/no-array-delete',
  '@typescript-eslint/no-confusing-non-null-assertion',
  '@typescript-eslint/no-duplicate-enum-values',
  '@typescript-eslint/no-duplicate-type-constituents',
  '@typescript-eslint/no-empty-function',
  '@typescript-eslint/no-explicit-any',
  '@typescript-eslint/no-extra-semi',
  '@typescript-eslint/no-import-type-side-effects',
  '@typescript-eslint/no-inferrable-types',
  '@typescript-eslint/no-invalid-this',
  '@typescript-eslint/no-loop-func',
  '@typescript-eslint/no-magic-numbers',
  '@typescript-eslint/no-meaningless-void-operator',
  '@typescript-eslint/no-mixed-enums',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing',
  '@typescript-eslint/no-redundant-type-constituents',
  '@typescript-eslint/no-require-imports',
  '@typescript-eslint/no-restricted-imports',
  '@typescript-eslint/no-shadow',
  '@typescript-eslint/no-type-alias',
  '@typescript-eslint/no-unnecessary-condition',
  '@typescript-eslint/no-unnecessary-qualifier',
  '@typescript-eslint/no-unnecessary-type-arguments',
  '@typescript-eslint/no-unsafe-assignment',
  '@typescript-eslint/no-unsafe-call',
  '@typescript-eslint/no-unsafe-declaration-merging',
  '@typescript-eslint/no-unsafe-enum-comparison',
  '@typescript-eslint/no-unsafe-member-access',
  '@typescript-eslint/no-unsafe-return',
  '@typescript-eslint/no-unsafe-unary-minus',
  '@typescript-eslint/no-useless-empty-export',
  '@typescript-eslint/no-useless-template-literals',
  '@typescript-eslint/padding-line-between-statements',
  '@typescript-eslint/parameter-properties',
  '@typescript-eslint/prefer-as-const',
  '@typescript-eslint/prefer-destructuring',
  '@typescript-eslint/prefer-enum-initializers',
  '@typescript-eslint/prefer-find',
  '@typescript-eslint/prefer-for-of',
  '@typescript-eslint/prefer-literal-enum-member',
  '@typescript-eslint/prefer-namespace-keyword',
  '@typescript-eslint/prefer-readonly-parameter-types',
  '@typescript-eslint/prefer-regexp-exec',
  '@typescript-eslint/prefer-string-starts-ends-with',
  '@typescript-eslint/require-await',
  '@typescript-eslint/sort-type-constituents',
  '@typescript-eslint/switch-exhaustiveness-check',
  '@typescript-eslint/typedef',
  '@typescript-eslint/unified-signatures',
  '@typescript-eslint/use-unknown-in-catch-callback-variable',
  'array-bracket-newline',
  'array-element-newline',
  'arrow-body-style',
  'arrow-parens',
  'block-scoped-var',
  'callback-return',
  'camelcase',
  'capitalized-comments',
  'class-methods-use-this',
  'complexity',
  'consistent-return',
  'consistent-this',
  'default-case',
  'default-param-last',
  'for-direction',
  'func-name-matching',
  'func-names',
  'func-style',
  'function-call-argument-newline',
  'function-paren-newline',
  'getter-return',
  'global-require',
  'grouped-accessor-pairs',
  'guard-for-in',
  'handle-callback-err',
  'id-blacklist',
  'id-denylist',
  'id-length',
  'id-match',
  'implicit-arrow-linebreak',
  'import/consistent-type-specifier-style',
  'import/default',
  'import/dynamic-import-chunkname',
  'import/exports-last',
  'import/extensions',
  'import/group-exports',
  'import/imports-first',
  'import/max-dependencies',
  'import/named',
  'import/namespace',
  'import/newline-after-import',
  'import/no-amd',
  'import/no-anonymous-default-export',
  'import/no-commonjs',
  'import/no-cycle',
  'import/no-default-export',
  'import/no-deprecated',
  'import/no-dynamic-require',
  'import/no-empty-named-blocks',
  'import/no-extraneous-dependencies',
  'import/no-import-module-exports',
  'import/no-internal-modules',
  'import/no-mutable-exports',
  'import/no-named-as-default',
  'import/no-named-as-default-member',
  'import/no-named-export',
  'import/no-namespace',
  'import/no-nodejs-modules',
  'import/no-relative-packages',
  'import/no-relative-parent-imports',
  'import/no-restricted-paths',
  'import/no-self-import',
  'import/no-unassigned-import',
  'import/no-unused-modules',
  'import/no-useless-path-segments',
  'import/order',
  'import/prefer-default-export',
  'import/unambiguous',
  'indent-legacy',
  'init-declarations',
  'jsx-quotes',
  'line-comment-position',
  'linebreak-style',
  'lines-around-comment',
  'lines-around-directive',
  'logical-assignment-operators',
  'max-classes-per-file',
  'max-depth',
  'max-len',
  'max-lines',
  'max-lines-per-function',
  'max-nested-callbacks',
  'max-params',
  'max-statements',
  'max-statements-per-line',
  'multiline-comment-style',
  'n/callback-return',
  'n/exports-style',
  'n/file-extension-in-import',
  'n/global-require',
  'n/hashbang',
  'n/no-extraneous-import',
  'n/no-extraneous-require',
  'n/no-hide-core-modules',
  'n/no-missing-import',
  'n/no-missing-require',
  'n/no-mixed-requires',
  'n/no-process-env',
  'n/no-process-exit',
  'n/no-restricted-import',
  'n/no-restricted-require',
  'n/no-sync',
  'n/no-unpublished-bin',
  'n/no-unpublished-import',
  'n/no-unpublished-require',
  'n/no-unsupported-features/es-builtins',
  'n/no-unsupported-features/es-syntax',
  'n/no-unsupported-features/node-builtins',
  'n/prefer-global/buffer',
  'n/prefer-global/console',
  'n/prefer-global/process',
  'n/prefer-global/text-decoder',
  'n/prefer-global/text-encoder',
  'n/prefer-global/url',
  'n/prefer-global/url-search-params',
  'n/prefer-node-protocol',
  'n/prefer-promises/dns',
  'n/prefer-promises/fs',
  'n/shebang',
  'newline-after-var',
  'newline-before-return',
  'newline-per-chained-call',
  'no-alert',
  'no-await-in-loop',
  'no-bitwise',
  'no-buffer-constructor',
  'no-catch-shadow',
  'no-confusing-arrow',
  'no-console',
  'no-constant-binary-expression',
  'no-constructor-return',
  'no-continue',
  'no-div-regex',
  'no-dupe-else-if',
  'no-duplicate-imports',
  'no-else-return',
  'no-empty-function',
  'no-empty-static-block',
  'no-eq-null',
  'no-extra-label',
  'no-extra-semi',
  'no-implicit-coercion',
  'no-implicit-globals',
  'no-inline-comments',
  'no-inner-declarations',
  'no-invalid-this',
  'no-label-var',
  'no-lonely-if',
  'no-loop-func',
  'no-magic-numbers',
  'no-mixed-requires',
  'no-multi-assign',
  'no-native-reassign',
  'no-negated-condition',
  'no-negated-in-lhs',
  'no-nested-ternary',
  'no-new-native-nonconstructor',
  'no-new-require',
  'no-nonoctal-decimal-escape',
  'no-param-reassign',
  'no-path-concat',
  'no-plusplus',
  'no-process-env',
  'no-process-exit',
  'no-promise-executor-return',
  'no-restricted-exports',
  'no-restricted-globals',
  'no-restricted-imports',
  'no-restricted-modules',
  'no-restricted-properties',
  'no-restricted-syntax',
  'no-return-await',
  'no-script-url',
  'no-setter-return',
  'no-shadow',
  'no-spaced-func',
  'no-sync',
  'no-ternary',
  'no-undef',
  'no-undefined',
  'no-underscore-dangle',
  'no-unsafe-optional-chaining',
  'no-unused-labels',
  'no-unused-private-class-members',
  'no-useless-concat',
  'no-warning-comments',
  'nonblock-statement-body-position',
  'one-var-declaration-per-line',
  'operator-assignment',
  'padding-line-between-statements',
  'prefer-arrow-callback',
  'prefer-destructuring',
  'prefer-exponentiation-operator',
  'prefer-named-capture-group',
  'prefer-numeric-literals',
  'prefer-object-has-own',
  'prefer-object-spread',
  'prefer-reflect',
  'prefer-rest-params',
  'prefer-spread',
  'prefer-template',
  'promise/always-return',
  'promise/avoid-new',
  'promise/catch-or-return',
  'promise/no-callback-in-promise',
  'promise/no-multiple-resolved',
  'promise/no-native',
  'promise/no-nesting',
  'promise/no-new-statics',
  'promise/no-promise-in-callback',
  'promise/no-return-in-finally',
  'promise/no-return-wrap',
  'promise/prefer-await-to-callbacks',
  'promise/prefer-await-to-then',
  'promise/valid-params',
  'radix',
  'require-atomic-updates',
  'require-await',
  'require-jsdoc',
  'require-unicode-regexp',
  'require-yield',
  'semi-style',
  'sort-imports',
  'sort-keys',
  'sort-vars',
  'strict',
  'switch-colon-spacing',
  'valid-jsdoc',
  'vars-on-top',
  'wrap-regex'
]

const intentionallyExcludedRules: string[] = [
]

const usedRules = Object.keys(ourRules)

const acknowledgedRules = [...deprecatedKnownRules, ...notYetConsideredRules, ...intentionallyExcludedRules, ...usedRules]

test('rule names valid', (t) => {
  const nonExistentRules = _.difference(acknowledgedRules, [...knownRules.keys()])
  t.deepEqual(nonExistentRules, [])
})

test('no intersection between lists', (t) => {
  const lists = { notYetConsideredRules, intentionallyExcludedRules, usedRules }

  const counts = Object.entries(lists)
    .flatMap(([listTitle, list]) => list.map((rule) => [listTitle, rule]))
    .reduce<Record<string, string[]>>(
    (acc, [listTitle, rule]) => {
      acc[rule] = Object.hasOwn(acc, rule) ? [...acc[rule], listTitle] : [listTitle]
      return acc
    },
    {}
  )

  const intersection = Object.fromEntries(
    Object.entries(counts).filter(([_rule, inLists]) => inLists.length > 1)
  )

  t.deepEqual(intersection, {})
})

test('known rules are considered', (t) => {
  const inexplicablyExcludedRules = _.difference([...knownRules.keys()], acknowledgedRules)

  t.deepEqual(inexplicablyExcludedRules, [])
})

test('no deprecated rules', (t) => {
  const usedDeprecatedRules = Object.keys(ourRules).filter((name) => deprecatedKnownRules.includes(name))
  t.deepEqual(usedDeprecatedRules, [])
})
