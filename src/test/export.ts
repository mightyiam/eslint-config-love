import test from 'ava'
import exported from '../index.js'
import { expectedExportedValue } from './expected-exported-value/_index.js'

test('exported value', (t) => {
  t.deepEqual(exported, expectedExportedValue)
})
