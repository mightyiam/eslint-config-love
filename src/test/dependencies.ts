import test from 'ava'
import semver from 'semver'
import { extractVersionRange, getPkgDetails, isPinnedRange, isSingleCaretRange } from './_util'

test('range types', async (t) => {
  const { ourDeps, ourPeerDeps, ourDevDeps } = await getPkgDetails()

  const nonCompliantDepRanges = Object.entries({ dep: ourDeps, peer: ourPeerDeps, dev: ourDevDeps })
    .flatMap(([depType, deps]) => Object.entries(deps).map(([depName, spec]) => {
      if (spec === undefined) throw new Error()
      return [depName, depType, spec] as const
    }))
    .filter(([depName, depType, spec]) => {
      if (depName === 'typescript' && depType === 'peer') {
        return spec !== '*'
      }

      if (depName === 'eslint-plugin-n' && depType === 'peer') {
        const ranges = spec.split('||').map(range => range.trim())
        if (ranges.length !== 2) return true
        return !ranges.every(range => isSingleCaretRange(range))
      }

      const range = extractVersionRange(spec)

      switch (depType) {
        case 'dep':
          return !isSingleCaretRange(range)
        case 'peer':
          return !isSingleCaretRange(range)
        case 'dev':
          return !isPinnedRange(range)
        default: throw new Error()
      }
    })

  t.deepEqual(nonCompliantDepRanges, [])
})

test('@typescript-eslint/eslint-plugin, dev dep subset of peer dep', async (t) => {
  const { ourPeerDeps, ourDevDeps } = await getPkgDetails()
  const peerDepPluginRange = ourPeerDeps['@typescript-eslint/eslint-plugin']
  if (peerDepPluginRange === undefined) {
    t.fail()
    return
  }
  const devDepPluginRange = ourDevDeps['@typescript-eslint/eslint-plugin']
  if (devDepPluginRange === undefined) throw new Error()
  t.true(semver.subset(devDepPluginRange, peerDepPluginRange))
})

test('devDep plugin range subset of dep parser range', async (t) => {
  const { ourDeps, ourDevDeps } = await getPkgDetails()
  const depParserRange = ourDeps['@typescript-eslint/parser']
  const devPluginRange = ourDevDeps['@typescript-eslint/eslint-plugin']
  if (devPluginRange === undefined) throw new Error()
  if (depParserRange === undefined) throw new Error()
  t.true(semver.subset(devPluginRange, depParserRange))
})

test('devDep @typescript-eslint/utils range equals devDep plugin range', async (t) => {
  const { ourDevDeps } = await getPkgDetails()
  const devPluginRange = ourDevDeps['@typescript-eslint/eslint-plugin']
  const devUtilsRange = ourDevDeps['@typescript-eslint/utils']
  if (devPluginRange === undefined) throw new Error()
  if (devUtilsRange === undefined) throw new Error()
  t.true(semver.subset(devUtilsRange, devPluginRange))
})
