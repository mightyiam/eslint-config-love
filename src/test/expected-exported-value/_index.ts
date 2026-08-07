import type { TSESLint } from '@typescript-eslint/utils'
import { parser, plugin as tseslintPlugin } from 'typescript-eslint'
import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import { expectedEslintCommentsRules } from './_eslint-comments.js'
import { expectedEslintRules } from './_eslint.js'
import { expectedNRules } from './_n.js'
import { expectedPromiseRules } from './_promise.js'
import { expectedTseslintRules } from './_typescript-eslint.js'

export const expectedExportedRules = {
  ...expectedEslintCommentsRules,
  ...expectedEslintRules,
  ...expectedNRules,
  ...expectedPromiseRules,
  ...expectedTseslintRules,
}

export const expectedExportedValue: TSESLint.FlatConfig.Config = {
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },

  languageOptions: {
    parser,
    parserOptions: {
      projectService: true,
    },
  },

  plugins: {
    '@typescript-eslint': tseslintPlugin,
    '@eslint-community/eslint-comments': eslintCommentsPlugin,
    n: nPlugin,
    promise: promisePlugin,
  },
  rules: expectedExportedRules,
}
