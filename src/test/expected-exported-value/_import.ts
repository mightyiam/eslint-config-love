import type { TSESLint } from '@typescript-eslint/utils'

export const expectedImportRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  'import/enforce-node-protocol-usage': ['error', 'always'],
  'import/export': ['error'],
  'import/first': ['error'],
  'import/no-absolute-path': [
    'error',
    { esmodule: true, commonjs: true, amd: false },
  ],
  'import/no-duplicates': ['error'],
  'import/no-named-default': ['error'],
  'import/no-webpack-loader-syntax': ['error'],
}
