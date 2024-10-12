import test from 'ava'
import { TSESLint } from '@typescript-eslint/utils'
import exported from '..'
import semver from 'semver'
import { extractVersionRange, getPkgDetails } from './_util'
import {
  parser as tseslintBottomParser,
  plugin as tseslintBottomPlugin,
} from 'typescript-eslint_bottom'
import * as importBottomPlugin from 'eslint-plugin-import_bottom'
import * as nBottomPlugin from 'eslint-plugin-n_bottom'
import * as promiseBottomPlugin from 'eslint-plugin-promise_bottom'

test('bottom dep version is minimum of dep range', async (t) => {
  const { ourDeps, ourDevDeps } = await getPkgDetails()

  const bottomDepsThatAreNotMinOfDepRange = [
    'typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-n',
    'eslint-plugin-promise',
  ]
    .map((depName) => {
      const bottomRange = ourDevDeps[`${depName}_bottom`]
      if (bottomRange === undefined) throw new Error()
      const bottomVersion = extractVersionRange(bottomRange)

      const depRange = ourDeps[depName]
      if (depRange === undefined) throw new Error()

      return { depName, bottomVersion, depRange }
    })
    .filter(({ bottomVersion, depRange }) => {
      const minDepVersion = semver.minVersion(depRange)
      if (minDepVersion === null) throw new Error()
      return bottomVersion !== minDepVersion.version
    })

  t.deepEqual(bottomDepsThatAreNotMinOfDepRange, [])
})

test('our configuration is compatible with the plugins and parser at bottom of dep ranges', async (t) => {
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
      '@typescript-eslint': tseslintBottomPlugin,
      import: importBottomPlugin,
      n: nBottomPlugin,
      promise: promiseBottomPlugin,
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
