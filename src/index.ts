import { TSESLint } from '@typescript-eslint/utils'
import { parser, plugin as tseslintPlugin } from 'typescript-eslint'
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import { rules } from './rules.js'

const eslintRuleNames = [
  ...new TSESLint.Linter({ configType: 'eslintrc' }).getRules().keys(),
]
const namesOfEslintRulesForWhichWeAreUsingTsEquivalents =
  eslintRuleNames.filter((name) =>
    Object.hasOwn(rules, `@typescript-eslint/${name}`),
  )

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
  plugins: {
    '@typescript-eslint': tseslintPlugin,
    'eslint-comments': eslintCommentsPlugin,
    import: importPlugin,
    n: nPlugin,
    promise: promisePlugin,
  },
  rules: {
    ...Object.fromEntries(
      namesOfEslintRulesForWhichWeAreUsingTsEquivalents.map((name) => [
        name,
        ['off'],
      ]),
    ),
    ...rules,
  },
}

export default config
