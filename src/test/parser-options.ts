import test from 'ava'
import { type Linter } from 'eslint'
import exported from '..'

test('export', (t): void => {
  const expectedParserOptions = {
    project: true
  } satisfies Linter.BaseConfig['parserOptions']

  t.deepEqual(exported.parserOptions, expectedParserOptions, 'parserOptions')
})
