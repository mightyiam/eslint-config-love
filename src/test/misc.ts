import test from 'ava'
import exported from '..'

test('rule configs are arrays', (t) => {
  if (exported.rules === undefined) throw new Error()
  const nonArrayConfigs = Object.entries(exported.rules).filter(
    ([_rule, config]) => !Array.isArray(config),
  )
  t.deepEqual(nonArrayConfigs, [])
})
