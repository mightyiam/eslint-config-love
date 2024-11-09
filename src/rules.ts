import type { TSESLint } from '@typescript-eslint/utils'
import _ from 'lodash'

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

interface Exports {
  rulesPerPlugin: Record<string, TSESLint.SharedConfig.RulesRecord>
  rules: TSESLint.SharedConfig.RulesRecord
  plugins: Record<string, TSESLint.FlatConfig.Plugin>
}

export const { rulesPerPlugin, rules, plugins }: Exports =
  imports.reduce<Exports>(
    (acc, { pluginName, plugin, rules: localRules }) => {
      if (plugin !== 'eslint') {
        acc.plugins[pluginName] = plugin
      }

      const rules = _.mapKeys(localRules, (_rule, localRuleName) =>
        plugin === 'eslint' ? localRuleName : `${pluginName}/${localRuleName}`,
      )
      acc.rulesPerPlugin[pluginName] = rules
      acc.rules = { ...acc.rules, ...rules }

      return acc
    },
    { rulesPerPlugin: {}, rules: {}, plugins: {} },
  )
