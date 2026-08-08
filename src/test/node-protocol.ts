import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '../index.js'

test('node protocol behavior survives import plugin replacement', async (t) => {
  const filePath = 'src/test/_fixture.ts'
  const eslint = new TSESLint.FlatESLint({
    overrideConfigFile: true,
    overrideConfig: [
      {
        ...exported,
        files: [filePath],
        settings: { n: { version: '<16.0.0' } },
      },
    ],
  })

  const code = [
    "import 'fs'",
    "export { readFile } from 'fs'",
    "void import('path')",
    "const os = require('os')",
  ].join('\n')
  const [result] = await eslint.lintText(code, { filePath })
  const messages = result.messages.filter(
    ({ ruleId }) => ruleId === 'n/prefer-node-protocol',
  )

  t.deepEqual(
    messages.map(({ message, fix }) => ({ message, fix: fix?.text })),
    [
      { message: 'Prefer `node:fs` over `fs`.', fix: 'node:' },
      { message: 'Prefer `node:fs` over `fs`.', fix: 'node:' },
      { message: 'Prefer `node:path` over `path`.', fix: 'node:' },
      { message: 'Prefer `node:os` over `os`.', fix: 'node:' },
    ],
  )
})
