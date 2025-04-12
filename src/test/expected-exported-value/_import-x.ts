import type { TSESLint } from '@typescript-eslint/utils'

export const expectedImportXRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  'import-x/export': ['error'],
  'import-x/first': ['error'],
  'import-x/no-absolute-path': [
    'error',
    { esmodule: true, commonjs: true, amd: false },
  ],
  'import-x/no-duplicates': ['error'],
  'import-x/no-named-default': ['error'],
  'import-x/no-webpack-loader-syntax': ['error'],
}
