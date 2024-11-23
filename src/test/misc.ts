import test from 'ava'
import exported from '../index.js'
import { ourDeps } from './_util.js'

test('rule configs are arrays', (t) => {
  if (exported.rules === undefined) throw new Error()
  const nonArrayConfigs = Object.entries(exported.rules).filter(
    ([_rule, config]) => !Array.isArray(config),
  )
  t.deepEqual(nonArrayConfigs, [])
})

test('tseslint dep group same version', (t) => {
  const { 'typescript-eslint': tseslint } = ourDeps
  const { '@typescript-eslint/utils': tseslintUtils } = ourDeps
  t.is(tseslint, tseslintUtils)
})
