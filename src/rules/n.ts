import type { TSESLint } from '@typescript-eslint/utils'

const rules: {
  plugin: string
  rules: Record<string, TSESLint.SharedConfig.RuleEntry>
} = {
  plugin: 'n',
  rules: {
    'handle-callback-err': ['error', '^(err|error)$'],
    'no-callback-literal': ['error'],
    'no-deprecated-api': ['error'],
    'no-exports-assign': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'process-exit-as-throw': ['error'],
  },
}

export default rules
