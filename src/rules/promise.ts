import type { TSESLint } from '@typescript-eslint/utils'

const rules: {
  plugin: string
  rules: Record<string, TSESLint.SharedConfig.RuleEntry>
} = {
  plugin: 'promise',
  rules: {
    'param-names': ['error'],
  },
}

export default rules
