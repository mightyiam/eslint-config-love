import type { TSESLint } from '@typescript-eslint/utils'

import eslintCommentsRules from './plugin-usage/eslint-comments.js'
import eslintRules from './plugin-usage/eslint.js'
import nRules from './plugin-usage/n.js'
import promiseRules from './plugin-usage/promise.js'
import typescriptEslint from './plugin-usage/typescript-eslint.js'
import importRules from './plugin-usage/import.js'

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
        /* eslint-disable no-param-reassign -- caller does not have access to param */
        acc.plugins[pluginName] = plugin
      }

      const rules = Object.fromEntries(
        Object.entries(localRules).map(([localRuleName, ruleConfig]) => [
          plugin === 'eslint'
            ? localRuleName
            : `${pluginName}/${localRuleName}`,
          ruleConfig,
        ]),
      )
      acc.rulesPerPlugin[pluginName] = rules
      acc.rules = { ...acc.rules, ...rules }

      return acc
      /* eslint-enable no-param-reassign */
    },
    { rulesPerPlugin: {}, rules: {}, plugins: {} },
  )
