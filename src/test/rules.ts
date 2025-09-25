import test from 'ava'
import { plugin as pluginTseslint } from 'typescript-eslint'
import pluginEslintComments from 'eslint-plugin-eslint-comments'
import pluginN from 'eslint-plugin-n'
import pluginImport from 'eslint-plugin-import'
import pluginPromise from 'eslint-plugin-promise'
import { equivalents, ourRules } from './_util.js'
import _ from 'lodash'
import { TSESLint } from '@typescript-eslint/utils'
import { intentionallyUnusedRules } from './_intentionally-unused-rules.js'
import { rulesToConsider } from './_rules_to_consider.js'
import { rulesPerPlugin } from '../plugin-usage.js'
import { expectedEslintCommentsRules } from './expected-exported-value/_eslint-comments.js'
import { expectedEslintRules } from './expected-exported-value/_eslint.js'
import { expectedImportRules } from './expected-exported-value/_import.js'
import { expectedNRules } from './expected-exported-value/_n.js'
import { expectedPromiseRules } from './expected-exported-value/_promise.js'
import { expectedTseslintRules } from './expected-exported-value/_typescript-eslint.js'

const knownEslintRules = new TSESLint.Linter({
  configType: 'eslintrc',
}).getRules()

if (pluginEslintComments.rules === undefined) throw new Error()
if (pluginN.rules === undefined) throw new Error()
if (pluginImport.rules === undefined) throw new Error()
if (pluginPromise.rules === undefined) throw new Error()
if (pluginTseslint.rules === undefined) throw new Error()

const rulesets: Array<[TSESLint.Linter.Plugin, string]> = [
  [pluginEslintComments.rules, 'eslint-comments'],
  [pluginTseslint.rules, '@typescript-eslint'],
  [pluginN.rules, 'n'],
  [pluginImport.rules, 'import'],
  [pluginPromise.rules, 'promise'],
]

const knownRules = new Map([
  ...knownEslintRules.entries(),
  ...rulesets.flatMap(([rules, pkgName]) =>
    Object.entries(rules).map(
      ([name, rule]) => [`${pkgName}/${name}`, rule as unknown] as const,
    ),
  ),
])

const deprecatedKnownRules = [...knownRules.entries()]
  .filter(([_name, rule_]) => {
    if (typeof rule_ !== 'object' || rule_ === null) throw new Error()
    const rule = rule_ as { meta?: object }
    const { meta } = rule
    if (meta === undefined) return false
    return Object.hasOwn(meta, 'deprecated')
  })
  .map(([name, _rule]) => name)

const usedRules = Object.keys(ourRules)

const acknowledgedRules = [
  ...deprecatedKnownRules,
  ...Object.values(rulesToConsider).flat(),
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
  const lists: Record<string, string[]> = {
    rulesToConsider: Object.values(rulesToConsider).flat(),
    intentionallyUnusedRules,
    usedRules,
    deprecatedKnownRules,
  }

  const counts = Object.entries(lists)
    .flatMap(([listTitle, list]) => list.map((rule) => [listTitle, rule]))
    .reduce<Record<string, string[]>>((acc, [listTitle, rule]) => {
      /* eslint-disable no-param-reassign -- caller does not have access to param */
      acc[rule] = Object.hasOwn(acc, rule)
        ? [...acc[rule], listTitle]
        : [listTitle]
      return acc
      /* eslint-enable no-param-reassign */
    }, {})

  const intersection = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- more than one means intersection
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

test('JS equivalent rules are off', (t) => {
  if (pluginTseslint.rules === undefined) throw new Error()
  const ourRules_: TSESLint.FlatConfig.Rules = ourRules

  const jsEquivalentRulesThatAreOn = equivalents.filter((ruleName) => {
    const { [ruleName]: baseRuleConfig } = ourRules_

    if (deprecatedKnownRules.includes(`@typescript-eslint/${ruleName}`)) {
      return false
    }

    if (baseRuleConfig === undefined) return false
    if (!Array.isArray(baseRuleConfig)) throw new Error()
    const [severity] = baseRuleConfig
    if (typeof severity !== 'string') throw new Error()
    return severity !== 'off'
  })

  t.deepEqual(jsEquivalentRulesThatAreOn, [])
})

test('rule lists and objects are sorted', (t) => {
  const actualRuleLists = {
    ..._.mapKeys(
      rulesToConsider,
      (_rules, pluginName) => `rules to consider/${pluginName}`,
    ),
    'expected rules/eslint-comments': Object.keys(expectedEslintCommentsRules),
    'expected rules/eslint': Object.keys(expectedEslintRules),
    'expected rules/import': Object.keys(expectedImportRules),
    'expected rules/n': Object.keys(expectedNRules),
    'expected rules/promise': Object.keys(expectedPromiseRules),
    'expected rules/@typescript-eslint': Object.keys(expectedTseslintRules),
    ..._.mapValues(rulesPerPlugin, (rules) => Object.keys(rules)),
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
