import type { TSESLint } from '@typescript-eslint/utils'

export const expectedEslintCommentsRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  'eslint-comments/no-aggregating-enable': ['error'],
  'eslint-comments/no-duplicate-disable': ['error'],
  'eslint-comments/no-unlimited-disable': ['error'],
  'eslint-comments/no-unused-enable': ['error'],
  'eslint-comments/require-description': [
    'error',
    {
      ignore: ['eslint-enable', 'eslint-env'],
    },
  ],
}
