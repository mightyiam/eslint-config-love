import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '..'
import semver from 'semver'
import { extractVersionRange, getPkgDetails, ourRules, tseslintBottom } from './_util'

const tseslintBottomPlugin = `${tseslintBottom}/eslint-plugin`
const tseslintBottomParser = `${tseslintBottom}/parser`

test('our configuration is compatible with the plugin and parser at bottom of peer dep range', async (t) => {
  const { ourPeerDeps, ourDevDeps } = await getPkgDetails()

  const peerDepRange = ourPeerDeps['@typescript-eslint/eslint-plugin']
  if (peerDepRange === undefined) throw new Error()

  const bottomPluginRange = ourDevDeps[tseslintBottomPlugin]
  if (bottomPluginRange === undefined) throw new Error()
  const bottomPluginVersion = extractVersionRange(bottomPluginRange)
  const bottomParserRange = ourDevDeps[tseslintBottomParser]
  if (bottomParserRange === undefined) throw new Error()
  const bottomParserVersion = extractVersionRange(bottomParserRange)

  const minPeerDepVersion = semver.minVersion(peerDepRange)
  if (minPeerDepVersion === null) throw new Error()

  t.deepEqual(bottomPluginVersion, minPeerDepVersion.version, 'bottom plugin version is bottom of peer dep')
  t.deepEqual(bottomParserVersion, minPeerDepVersion.version, 'bottom parser version is bottom of peer dep')

  const config = {
    ...structuredClone(exported),
    plugins: [
      ...exported.plugins.filter(p => p !== '@typescript-eslint'),
      tseslintBottomPlugin
    ],
    parser: tseslintBottomParser,
    rules: Object.fromEntries(
      Object.entries(ourRules).map(([name, config]) => [
        name.replace('@typescript-eslint/', `${tseslintBottom}/`),
        config
      ])
    ),
    parserOptions: {
      project: './tsconfig.json'
    }
  }

  const eslint = new TSESLint.ESLint({
    useEslintrc: false,
    overrideConfig: config
  })

  const results = await eslint.lintFiles('src/**/*')
  t.true(results.length > 0)
  results.forEach(result => t.deepEqual(result.messages, [], result.filePath))
})
