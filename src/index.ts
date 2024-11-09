import { TSESLint } from '@typescript-eslint/utils'
import { parser } from 'typescript-eslint'
import { rules, plugins } from './rules.js'

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
  plugins,
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
