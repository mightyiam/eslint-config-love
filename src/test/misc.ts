import test from 'ava'
import exported from '..'

test('rule configs are arrays', (t) => {
  const nonArrayConfigs = Object.entries(exported.rules).filter(([_rule, config]) => !Array.isArray(config))
  t.deepEqual(nonArrayConfigs, [])
})
