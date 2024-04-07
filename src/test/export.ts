import test from 'ava'
import exported from '..'
import { expectedExportedValue } from './_util'

test('exported value', (t) => {
  t.deepEqual(exported, expectedExportedValue)
})
