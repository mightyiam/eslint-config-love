import test from 'ava'
import { ESLint } from 'eslint'
import exported from '..'
import semver from 'semver'
import { extractVersionSpec, getPkgDetails, ourRules, typescriptEslintBottom } from './_util'

const typescriptEslintBottomPlugin = `${typescriptEslintBottom}/eslint-plugin`
const typescriptEslintBottomParser = `${typescriptEslintBottom}/parser`

test('our configuration is compatible with the plugin and parser at bottom of peer dep range', async (t) => {
  const { ourPeerDeps, ourDevDeps } = await getPkgDetails()

  const peerDepRange = ourPeerDeps['@typescript-eslint/eslint-plugin']
  if (peerDepRange === undefined) throw new Error()

  const bottomPluginRange = ourDevDeps[typescriptEslintBottomPlugin]
  if (bottomPluginRange === undefined) throw new Error()
  const bottomPluginVersion = extractVersionSpec(bottomPluginRange)
  const bottomParserRange = ourDevDeps[typescriptEslintBottomParser]
  if (bottomParserRange === undefined) throw new Error()
  const bottomParserVersion = extractVersionSpec(bottomParserRange)

  const minPeerDepVersion = semver.minVersion(peerDepRange)
  if (minPeerDepVersion === null) throw new Error()

  t.deepEqual(bottomPluginVersion, minPeerDepVersion.version, 'bottom plugin version is bottom of peer dep')
  t.deepEqual(bottomParserVersion, minPeerDepVersion.version, 'bottom parser version is bottom of peer dep')

  const config = {
    ...structuredClone(exported),
    plugins: [typescriptEslintBottomPlugin],
    parser: typescriptEslintBottomParser,
    rules: Object.fromEntries(
      Object.entries(ourRules).map(([name, config]) => [
        name.replace('@typescript-eslint/', `${typescriptEslintBottom}/`),
        config
      ])
    ),
    parserOptions: {
      project: './tsconfig.json'
    }
  }

  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfig: config
  })

  const results = await eslint.lintFiles('src/**/*')
  t.true(results.length > 0)
  results.forEach(result => t.deepEqual(result.messages, [], result.filePath))
})
