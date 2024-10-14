import test from 'ava'
import exported from '../index.js'
import { expectedExportedValue } from './_expected-exported-value.js'

test('exported value', (t) => {
  t.deepEqual(exported, expectedExportedValue)
})
