import type { TSESLint } from '@typescript-eslint/utils'
import { parser } from 'typescript-eslint'
import { rules, plugins } from './plugin-usage.js'

const config: TSESLint.FlatConfig.Config = {
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },

  languageOptions: {
    parser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins,
  rules,
}

export default config
