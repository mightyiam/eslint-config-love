import type { TSESLint } from '@typescript-eslint/utils'

export const expectedPromiseRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  'promise/avoid-new': ['error'],
  'promise/no-multiple-resolved': ['error'],
  'promise/param-names': ['error'],
}
