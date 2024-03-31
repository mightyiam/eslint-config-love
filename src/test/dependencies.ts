import test from 'ava'
import semver from 'semver'
import { extractVersionSpec, getPkgDetails, isPinnedRange, isSingleCaretRange, typescriptEslintBottom } from './_util'

test('range types', async (t) => {
  const { ourDeps, ourPeerDeps, ourDevDeps } = await getPkgDetails()

  t.deepEqual(Object.keys(ourDeps).sort(), ['@typescript-eslint/parser', 'eslint-config-standard'])
  const eslintConfigStandard = ourDeps['eslint-config-standard']
  if (eslintConfigStandard === undefined) throw new Error()
  t.true(isPinnedRange(eslintConfigStandard), 'eslint-config-standard is pinned')
  const parser = ourDeps['@typescript-eslint/parser']
  if (parser === undefined) throw new Error()
  t.true(isSingleCaretRange(parser), '@typescript-eslint/parser is a single `^` range.')
  const typescriptValue = ourPeerDeps.typescript
  t.is(typescriptValue, '*', 'Peer dependency typescript is `*`')
  const typescriptEslintPluginValue = ourPeerDeps['@typescript-eslint/eslint-plugin']
  if (typescriptEslintPluginValue === undefined) throw new Error()
  t.true(
    isSingleCaretRange(typescriptEslintPluginValue),
    `Peer dependency \`@typescript-eslint/eslint-plugin: ${typescriptEslintPluginValue}\` is a single \`^\` range.`
  )
  for (const [name, spec] of Object.entries(ourDevDeps)) {
    if (spec === undefined) throw new Error()
    if (spec.startsWith('github:')) continue
    const range = name.startsWith(`${typescriptEslintBottom}/`) ? extractVersionSpec(spec) : spec
    t.true(isPinnedRange(range), `Dev dependency \`${name}: ${spec}\` is pinned`)
  }
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
