import test from 'ava'
import { plugin as pluginTseslint } from 'typescript-eslint'
import pluginN from 'eslint-plugin-n'
import pluginImport from 'eslint-plugin-import'
import pluginPromise from 'eslint-plugin-promise'
import { equivalents, ourRules } from './_util.js'
import _ from 'lodash'
import { TSESLint } from '@typescript-eslint/utils'
import { intentionallyUnusedRules } from './_intentionally-unused-rules.js'
import {
  eslintRulesToConsider,
  importRulesToConsider,
  nRulesToConsider,
  promiseRulesToConsider,
  rulesToConsider,
  tseslintRulesToConsider,
} from './_rules_to_consider.js'
import {
  expectedEslintRules,
  expectedImportRules,
  expectedNRules,
  expectedPromiseRules,
  expectedTseslintRules,
} from './_expected-exported-value.js'
import { importRules, nRules, promiseRules, tseslintRules } from '../rules.js'

const eslintRules = new TSESLint.Linter({ configType: 'eslintrc' }).getRules()

if (pluginN.rules === undefined) throw new Error()
if (pluginImport.rules === undefined) throw new Error()
if (pluginPromise.rules === undefined) throw new Error()
if (pluginTseslint.rules === undefined) throw new Error()

const rulesets: Array<[TSESLint.Linter.Plugin, string]> = [
  [pluginTseslint.rules, '@typescript-eslint'],
  [pluginN.rules, 'n'],
  [pluginImport.rules, 'import'],
  [pluginPromise.rules, 'promise'],
]

const knownRules = new Map([
  ...eslintRules.entries(),
  ...rulesets.flatMap(([rules, pkgName]) =>
    Object.entries(rules).map(
      ([name, rule]) => [`${pkgName}/${name}`, rule as unknown] as const,
    ),
  ),
])

const deprecatedKnownRules = [...knownRules.entries()]
  .filter(([_name, rule_]) => {
    const rule = rule_ as { meta?: { deprecated?: boolean } }
    const meta = rule.meta
    if (meta === undefined) return false
    return meta.deprecated === true
  })
  .map(([name, _rule]) => name)

const usedRules = Object.keys(ourRules)

const acknowledgedRules = [
  ...deprecatedKnownRules,
  ...rulesToConsider,
  ...intentionallyUnusedRules,
  ...usedRules,
]

test('rule names valid', (t) => {
  const nonExistentRules = _.difference(acknowledgedRules, [
    ...knownRules.keys(),
  ])
  t.deepEqual(nonExistentRules, [])
})

test('no intersection between lists', (t) => {
  const lists = {
    rulesToConsider,
    intentionallyUnusedRules,
    usedRules,
    deprecatedKnownRules,
  }

  const counts = Object.entries(lists)
    .flatMap(([listTitle, list]) => list.map((rule) => [listTitle, rule]))
    .reduce<Record<string, string[]>>((acc, [listTitle, rule]) => {
      acc[rule] = Object.hasOwn(acc, rule)
        ? [...acc[rule], listTitle]
        : [listTitle]
      return acc
    }, {})

  const intersection = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    Object.entries(counts).filter(([_rule, inLists]) => inLists.length > 1),
  )

  t.deepEqual(intersection, {})
})

test('known rules are considered', (t) => {
  const inexplicablyExcludedRules = _.difference(
    [...knownRules.keys()],
    acknowledgedRules,
  )

  t.deepEqual(inexplicablyExcludedRules, [])
})

test('no deprecated rules', (t) => {
  const usedDeprecatedRules = Object.keys(ourRules).filter((name) =>
    deprecatedKnownRules.includes(name),
  )
  t.deepEqual(usedDeprecatedRules, [])
})

test('JS equivalent rules are off', async (t) => {
  if (pluginTseslint.rules === undefined) throw new Error()
  const ourRules_: TSESLint.FlatConfig.Rules = ourRules

  const jsEquivalentRulesThatAreOn = equivalents.filter((ruleName) => {
    const baseRuleConfig = ourRules_[ruleName]

    if (deprecatedKnownRules.includes(`@typescript-eslint/${ruleName}`)) {
      return false
    }

    if (baseRuleConfig === undefined) return false
    if (!Array.isArray(baseRuleConfig)) throw new Error()
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const severity = baseRuleConfig[0]
    if (typeof severity !== 'string') throw new Error()
    return severity !== 'off'
  })

  t.deepEqual(jsEquivalentRulesThatAreOn, [])
})

test('rule lists and objects are sorted', (t) => {
  const actualRuleLists = {
    eslintRulesToConsider,
    importRulesToConsider,
    nRulesToConsider,
    promiseRulesToConsider,
    tseslintRulesToConsider,
    expectedEslintRules: Object.keys(expectedEslintRules),
    expectedImportRules: Object.keys(expectedImportRules),
    expectedNRules: Object.keys(expectedNRules),
    expectedPromiseRules: Object.keys(expectedPromiseRules),
    expectedTseslintRules: Object.keys(expectedTseslintRules),
    eslintRules: Object.keys(eslintRules),
    importRules: Object.keys(importRules),
    nRules: Object.keys(nRules),
    promiseRules: Object.keys(promiseRules),
    tseslintRules: Object.keys(tseslintRules),
  }

  const sortedRuleLists = Object.fromEntries(
    Object.entries(actualRuleLists).map(([listName, ruleNames]) => {
      const sorted = [...ruleNames]
      sorted.sort()
      return [listName, sorted]
    }),
  )
  t.deepEqual(actualRuleLists, sortedRuleLists)
})
