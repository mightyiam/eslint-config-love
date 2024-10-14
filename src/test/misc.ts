import test from 'ava'
import exported from '../index.js'
import { getPkgDetails } from './_util.js'

test('rule configs are arrays', (t) => {
  if (exported.rules === undefined) throw new Error()
  const nonArrayConfigs = Object.entries(exported.rules).filter(
    ([_rule, config]) => !Array.isArray(config),
  )
  t.deepEqual(nonArrayConfigs, [])
})

test('tseslint dep group same version', async (t) => {
  const { ourDeps } = await getPkgDetails()
  const tseslint = ourDeps['typescript-eslint']
  if (tseslint === undefined) throw new Error()
  const tseslintUtils = ourDeps['@typescript-eslint/utils']
  if (tseslintUtils === undefined) throw new Error()
  t.is(tseslint, tseslintUtils)
})
