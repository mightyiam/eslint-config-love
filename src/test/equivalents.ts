import test from 'ava'
import { rules as typescriptEslintRules } from '@typescript-eslint/eslint-plugin'
import { equivalents, ourRules } from './_util'

test('JS equivalent rules are off', async (t) => {
  Object.keys(ourRules).forEach((name) => {
    const bareName = name.replace('@typescript-eslint/', '')
    if (!Object.prototype.hasOwnProperty.call(typescriptEslintRules, bareName)) return
    if (!equivalents.includes(bareName)) return
    const config = ourRules[bareName]
    t.is(config, 'off', bareName)
  })
})
