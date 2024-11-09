import type { TSESLint } from '@typescript-eslint/utils'

import eslintCommentsRules from './rules/eslint-comments.js'
import eslintRules from './rules/eslint.js'
import nRules from './rules/n.js'
import promiseRules from './rules/promise.js'
import typescriptEslint from './rules/typescript-eslint.js'
import importRules from './rules/import.js'

export interface PluginUsage {
  pluginName: string
  plugin: TSESLint.FlatConfig.Plugin | 'eslint'
  rules: Record<string, TSESLint.SharedConfig.RuleEntry>
}

const imports: PluginUsage[] = [
  typescriptEslint,
  eslintCommentsRules,
  eslintRules,
  nRules,
  promiseRules,
  importRules,
]

export const rulesPerPlugin: Record<
  string,
  Record<string, TSESLint.SharedConfig.RuleEntry>
> = Object.fromEntries(
  imports.map(({ pluginName, rules }) => [pluginName, rules]),
)

const ruleEntries: Array<[string, TSESLint.SharedConfig.RuleEntry]> =
  imports.flatMap(({ pluginName, rules }) =>
    Object.entries(rules).map(([ruleNameLocal, ruleConfig]) => [
      pluginName === '' ? ruleNameLocal : `${pluginName}/${ruleNameLocal}`,
      ruleConfig,
    ]),
  )

export const rules: Record<string, TSESLint.SharedConfig.RuleEntry> =
  Object.fromEntries(ruleEntries)

export const plugins: Record<string, TSESLint.FlatConfig.Plugin> =
  Object.fromEntries(
    imports
      .filter(({ plugin }) => plugin !== 'eslint')
      .map(({ pluginName, plugin }) => [
        pluginName,
        plugin as TSESLint.FlatConfig.Plugin,
      ]),
  )
