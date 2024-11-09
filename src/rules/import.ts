import type { TSESLint } from '@typescript-eslint/utils'

const rules: {
  plugin: string
  rules: Record<string, TSESLint.SharedConfig.RuleEntry>
} = {
  plugin: 'import',
  rules: {
    export: ['error'],
    first: ['error'],
    'no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ],
    'no-duplicates': ['error'],
    'no-named-default': ['error'],
    'no-webpack-loader-syntax': ['error'],
  },
}

export default rules
