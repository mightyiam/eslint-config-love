import test from 'ava'
import { type TSESLint } from '@typescript-eslint/utils'
import exported from '..'

test('export', (t): void => {
  const expectedParserOptions = {
    project: true
  } satisfies TSESLint.ClassicConfig.ParserOptions

  t.deepEqual(exported.parserOptions, expectedParserOptions, 'parserOptions')
})
