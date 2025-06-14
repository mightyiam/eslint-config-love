import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '../index.js'
import { expectedExportedValue } from './expected-exported-value/_index.js'

const eslint = new TSESLint.FlatESLint({
  // using `overrideConfig` to mitigate the affect of this project's config
  overrideConfig: [exported],
})

// @ts-expect-error -- seems like a type error
const actual: TSESLint.FlatConfig.Config =
  await eslint.calculateConfigForFile('foo.js')

test('plugins', (t) => {
  if (actual.plugins === undefined) throw new Error()

  const actualSansAt = Object.fromEntries(
    Object.entries(actual.plugins).filter(([key, _]) => key !== '@'),
  )
  t.deepEqual(actualSansAt, expectedExportedValue.plugins)
})

test('languageOptions', (t) => {
  const { languageOptions: actualLanguageOptions } = actual
  if (actualLanguageOptions === undefined) throw new Error()
  t.deepEqual(actualLanguageOptions, {
    ...expectedExportedValue.languageOptions,
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- version string
    ecmaVersion: 2026,
    sourceType: 'module',
  })
})

test('rule levels', (t) => {
  t.deepEqual(normalize(actual.rules), normalize(expectedExportedValue.rules))

  function normalize(
    rules?: TSESLint.SharedConfig.RulesRecord,
  ): Record<string, string> {
    if (rules === undefined) throw new Error()
    return Object.fromEntries(
      Object.entries(rules).map(([name, value]) => {
        if (value === undefined) throw new Error()
        if (!Array.isArray(value)) throw new Error()
        const [level] = value
        return [
          name,
          typeof level === 'string'
            ? level
            : { '0': 'off', '1': 'warn', '2': 'error' }[level],
        ]
      }),
    )
  }
})
