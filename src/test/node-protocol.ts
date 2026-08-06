import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '../index.js'

test('node protocol behavior survives import plugin replacement', async (t) => {
  const filePath = 'src/test/_fixture.ts'
  const eslint = new TSESLint.FlatESLint({
    overrideConfigFile: true,
    overrideConfig: [{ ...exported, files: [filePath] }],
  })

  const [result] = await eslint.lintText("import 'fs'\n", { filePath })
  const messages = result.messages.filter(
    ({ ruleId }) => ruleId === 'n/prefer-node-protocol',
  )

  const [message, ...unexpectedMessages] = messages
  t.deepEqual(unexpectedMessages, [])
  t.is(message.message, 'Prefer `node:fs` over `fs`.')
  t.is(message.fix?.text, 'node:')
})
