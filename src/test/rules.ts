import test from 'ava'
import { plugin as pluginTseslint } from 'typescript-eslint'
import * as pluginN from 'eslint-plugin-n'
import * as pluginImport from 'eslint-plugin-import'
import * as pluginPromise from 'eslint-plugin-promise'
import { equivalents, ourRules } from './_util'
import _ from 'lodash'
import { TSESLint } from '@typescript-eslint/utils'
import { intentionallyUnusedRules } from '../_intentionally-unused-rules'
import { rulesToConsider } from './_rules_to_consider'

if (pluginN === undefined) throw new Error()
if (pluginImport === undefined) throw new Error()
if (pluginPromise === undefined) throw new Error()

const eslintRules = new TSESLint.Linter().getRules()

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
  if (ourRules_ === undefined) throw new Error()

  const jsEquivalentRulesThatAreOn = equivalents.filter((ruleName) => {
    const baseName = ruleName.replace('@typescript-eslint/', '')
    const baseRuleConfig = ourRules_[baseName]
    if (baseRuleConfig === undefined) return false
    if (!Array.isArray(baseRuleConfig)) throw new Error()
    const severity = baseRuleConfig[0]
    if (typeof severity !== 'string') throw new Error()
    return severity !== 'off'
  })

  t.deepEqual(jsEquivalentRulesThatAreOn, [])
})
