import type { TSESLint } from '@typescript-eslint/utils'

import eslintCommentsRules from './rules/eslint-comments.js'
import eslintRules from './rules/eslint.js'
import nRules from './rules/n.js'
import promiseRules from './rules/promise.js'
import typescriptEslint from './rules/typescript-eslint.js'
import importRules from './rules/import.js'

const imports: Array<{
  plugin: string
  rules: Record<string, TSESLint.SharedConfig.RuleEntry>
}> = [
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
> = Object.fromEntries(imports.map(({ plugin, rules }) => [plugin, rules]))

const ruleEntries: Array<[string, TSESLint.SharedConfig.RuleEntry]> =
  imports.flatMap(({ plugin, rules }) =>
    Object.entries(rules).map(([ruleNameLocal, ruleConfig]) => [
      plugin === '' ? ruleNameLocal : `${plugin}/${ruleNameLocal}`,
      ruleConfig,
    ]),
  )

export const rules: Record<string, TSESLint.SharedConfig.RuleEntry> =
  Object.fromEntries(ruleEntries)
