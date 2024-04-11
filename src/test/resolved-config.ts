import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '..'
import { expectedExportedValue } from './_util'

const eslint = new TSESLint.ESLint({
  useEslintrc: false,
  overrideConfig: structuredClone(exported)
})

const actual = eslint.calculateConfigForFile('foo.js')

test('plugins', async (t) => {
  t.deepEqual((await actual).plugins, [...expectedExportedValue.plugins].reverse())
})

test('parser', async (t) => {
  const parser = (await actual).parser
  if (typeof parser !== 'string') throw new Error()
  t.true(parser.includes(expectedExportedValue.parser))
})

test('rules', async (t) => {
  t.deepEqual((await actual).rules, expectedExportedValue.rules)
})
