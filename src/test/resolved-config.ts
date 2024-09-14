import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '..'
import { expectedExportedValue } from './_expected-exported-value'

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
  const actualLanguageOptions = actual.languageOptions
  if (actualLanguageOptions === undefined) throw new Error()
  t.deepEqual(actualLanguageOptions, {
    ...expectedExportedValue.languageOptions,
    ecmaVersion: 'latest',
    sourceType: 'module',
  })
})

test('rules', async (t) => {
  // @ts-expect-error type seems wrong
  const actual: TSESLint.FlatConfig.Config = await actualP
  if (expectedExportedValue.rules === undefined) throw new Error()
  const rules: TSESLint.FlatConfig.Rules = expectedExportedValue.rules
  const normalized = Object.fromEntries(
    Object.entries(rules).map(([name, value]) => {
      if (value === undefined) throw new Error()
      if (!Array.isArray(value)) throw new Error()
      const [level, ...options] = value
      if (typeof level === 'number') throw new Error()
      enum Level {
        error = 2,
        warn = 1,
        off = 0,
      }
      return [name, [Level[level], ...options]]
    }),
  )
  t.deepEqual(actual.rules, normalized)
})
