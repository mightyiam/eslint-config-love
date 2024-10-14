import test from 'ava'
import {
  extractVersionRange,
  isPinnedRange,
  isSingleCaretRange,
  ourDeps,
  ourDevDeps,
  ourPeerDeps,
} from './_util.js'

test('range types', async (t) => {
  const nonCompliantDepRanges = Object.entries({
    dep: ourDeps,
    peer: ourPeerDeps,
    dev: ourDevDeps,
  })
    .flatMap(([depType, deps]) =>
      Object.entries(deps).map(([depName, spec]) => {
        if (spec === undefined) throw new Error()
        return [depName, depType, spec] as const
      }),
    )
    .filter(([depName, depType, spec]) => {
      if (depName === 'typescript' && depType === 'peer') {
        return spec !== '*'
      }

      const range = extractVersionRange(spec)

      switch (depType) {
        case 'dep':
          return !isSingleCaretRange(range)
        case 'peer':
          return !isSingleCaretRange(range)
        case 'dev':
          return !isPinnedRange(range)
        default:
          throw new Error()
      }
    })

  t.deepEqual(nonCompliantDepRanges, [])
})
