import test from 'ava'
import { ESLint } from 'eslint'
import exported from '..'
import { expectedExportedValue } from './_util'

const eslint = new ESLint({
  useEslintrc: false,
  overrideConfig: structuredClone(exported)
})

const actual = eslint.calculateConfigForFile('foo.js')

test('plugins', async (t) => {
  t.deepEqual((await actual).plugins, [...expectedExportedValue.plugins].reverse())
})

test('parser', async (t) => {
  t.true((await actual).parser.includes(expectedExportedValue.parser))
})

test('rules', async (t) => {
  t.deepEqual((await actual).rules, expectedExportedValue.rules)
})
