import test from 'ava'
import exported from '..'
import { expectedExportedValue } from './_expected-exported-value'

test('exported value', (t) => {
  t.deepEqual(exported, expectedExportedValue)
})
