import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '../index.js'
import { expectedExportedValue } from './_expected-exported-value.js'

const eslint = new TSESLint.FlatESLint({
  // using `overrideConfig` to mitigate the affect of this project's config
  overrideConfig: [exported],
})

const actualP = eslint.calculateConfigForFile('foo.js')

test('plugins', async (t) => {
  // @ts-expect-error type seems wrong
  const actual: TSESLint.FlatConfig.Config = await actualP
  if (actual.plugins === undefined) throw new Error()

  const actualSansAt = Object.fromEntries(
    Object.entries(actual.plugins).filter(([key, _]) => key !== '@'),
  )
  t.deepEqual(actualSansAt, expectedExportedValue.plugins)
})

test('languageOptions', async (t) => {
  // @ts-expect-error type seems wrong
  const actual: TSESLint.FlatConfig.Config = await actualP
  const { languageOptions: actualLanguageOptions } = actual
  if (actualLanguageOptions === undefined) throw new Error()
  t.deepEqual(actualLanguageOptions, {
    ...expectedExportedValue.languageOptions,
    ecmaVersion: 'latest',
    sourceType: 'module',
  })
})

test('rule levels', async (t) => {
  // @ts-expect-error type seems wrong
  const actual: TSESLint.FlatConfig.Config = await actualP
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
