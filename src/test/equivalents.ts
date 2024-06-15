import test from 'ava'
import { plugin } from 'typescript-eslint'
import { equivalents, ourRules } from './_util'
import { type TSESLint } from '@typescript-eslint/utils'

test('JS equivalent rules are off', async (t) => {
  if (plugin.rules === undefined) throw new Error()
  const ourRules_: TSESLint.FlatConfig.Rules = ourRules
  Object.keys(ourRules_).forEach((name) => {
    const bareName = name.replace('@typescript-eslint/', '')
    if (!Object.prototype.hasOwnProperty.call(plugin.rules, bareName)) return
    if (!equivalents.includes(bareName)) return
    const config = ourRules_[bareName]
    t.deepEqual(config, ['off'], bareName)
  })
})
