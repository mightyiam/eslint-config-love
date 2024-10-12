import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '..'
import semver from 'semver'
import { extractVersionRange, getPkgDetails } from './_util'
import {
  parser as tseslintBottomParser,
  plugin as tseslintBottomPlugin,
} from 'typescript-eslint_bottom'

const tseslintBottom = 'typescript-eslint_bottom'

test('our configuration is compatible with the plugin and parser at bottom of dep range', async (t) => {
  const { ourDeps, ourDevDeps } = await getPkgDetails()

  const tseslintDepRange = ourDeps['typescript-eslint']
  if (tseslintDepRange === undefined) throw new Error()

  const tseslintBottomRange = ourDevDeps[tseslintBottom]
  if (tseslintBottomRange === undefined) throw new Error()
  const tseslintBottomVersion = extractVersionRange(tseslintBottomRange)

  const tseslintMinVersion = semver.minVersion(tseslintDepRange)
  if (tseslintMinVersion === null) throw new Error()

  t.deepEqual(
    tseslintBottomVersion,
    tseslintMinVersion.version,
    'typescript-eslint_bottom version is min of dep',
  )

  const filePath = 'src/index.ts'

  const config = {
    ...exported,
    files: [filePath],
    languageOptions: {
      parser: tseslintBottomParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      ...exported.plugins,
      '@typescript-eslint': tseslintBottomPlugin,
    },
  } satisfies TSESLint.FlatConfig.Config

  const eslint = new TSESLint.FlatESLint({
    overrideConfigFile: true,
    baseConfig: [config],
  })

  const results = await eslint.lintText('', { filePath })

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  t.true(results.length > 0)
  results.forEach((result) => t.deepEqual(result.messages, [], result.filePath))
})
