import type { TSESLint } from '@typescript-eslint/utils'

export const expectedEslintCommentsRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  '@eslint-community/eslint-comments/disable-enable-pair': [
    'error',
    { allowWholeFile: true },
  ],
  '@eslint-community/eslint-comments/no-aggregating-enable': ['error'],
  '@eslint-community/eslint-comments/no-duplicate-disable': ['error'],
  '@eslint-community/eslint-comments/no-unlimited-disable': ['error'],
  '@eslint-community/eslint-comments/no-unused-enable': ['error'],
  '@eslint-community/eslint-comments/require-description': [
    'error',
    {
      ignore: ['eslint-enable', 'eslint-env'],
    },
  ],
}
