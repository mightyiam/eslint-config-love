import type { TSESLint } from '@typescript-eslint/utils'

const rules: {
  plugin: 'eslint-comments'
  rules: Record<string, TSESLint.SharedConfig.RuleEntry>
} = {
  plugin: 'eslint-comments',
  rules: {
    'require-description': [
      'error',
      {
        ignore: ['eslint-enable', 'eslint-env'],
      },
    ],
  },
}

export default rules
