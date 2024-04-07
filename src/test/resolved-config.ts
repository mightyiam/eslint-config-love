import test from 'ava'
import { ESLint } from 'eslint'
import exported from '..'
import { expectedExportedValue } from './_util'

test('resolved config', async (t): Promise<void> => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfig: structuredClone(exported)
  })

  const actual = await eslint.calculateConfigForFile('foo.js')

  t.deepEqual(actual.env, expectedExportedValue.env, 'env')
  t.deepEqual(actual.plugins, [...expectedExportedValue.plugins].reverse(), 'plugins')
  t.deepEqual(actual.globals, expectedExportedValue.globals, 'globals')
  t.true(actual.parser.includes(expectedExportedValue.parser), 'parser')
  t.deepEqual(actual.rules, expectedExportedValue.rules, 'rules')
})
