import type { TSESLint } from '@typescript-eslint/utils'
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments'
import importXPlugin from 'eslint-plugin-import-x'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import { parser, plugin as tseslintPlugin } from 'typescript-eslint'
import { expectedEslintCommentsRules } from './_eslint-comments.js'
import { expectedEslintRules } from './_eslint.js'
import { expectedImportXRules } from './_import-x.js'
import { expectedNRules } from './_n.js'
import { expectedPromiseRules } from './_promise.js'
import { expectedTseslintRules } from './_typescript-eslint.js'

export const expectedExportedRules = {
  ...expectedEslintCommentsRules,
  ...expectedEslintRules,
  ...expectedImportXRules,
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
    'eslint-comments': eslintCommentsPlugin,
    'import-x': importXPlugin,
    n: nPlugin,
    promise: promisePlugin,
  },
  rules: expectedExportedRules,
}
