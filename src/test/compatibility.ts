import test from 'ava'
import type { TSESLint } from '@typescript-eslint/utils'
import { ESLint } from 'eslint_bottom'
import exported from '../index.js'
import semver from 'semver'
import { extractVersionRange, getPkgDetails } from './_util.js'
import {
  parser as tseslintBottomParser,
  plugin as tseslintBottomPlugin,
} from 'typescript-eslint_bottom'
import importBottomPlugin from 'eslint-plugin-import_bottom'
import nBottomPlugin from 'eslint-plugin-n_bottom'
import promiseBottomPlugin from 'eslint-plugin-promise_bottom'

test('bottom dep version is minimum of dep range', async (t) => {
  const { ourDeps, ourDevDeps, ourPeerDeps } = await getPkgDetails()

  const bottomDepsThatAreNotMinOfDepRange = [
    ['typescript-eslint', ourDeps] as const,
    ['eslint', ourPeerDeps] as const,
    ['eslint-plugin-import', ourDeps] as const,
    ['eslint-plugin-n', ourDeps] as const,
    ['eslint-plugin-promise', ourDeps] as const,
  ]
    .map(([depName, depCategory]) => {
      const bottomRange = ourDevDeps[`${depName}_bottom`]
      if (bottomRange === undefined) throw new Error()
      const bottomVersion = extractVersionRange(bottomRange)

      const depRange = depCategory[depName]
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

  const eslint = new ESLint({
    overrideConfigFile: true,
    baseConfig: [config],
  })

  const results = await eslint.lintText('', { filePath })

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  t.true(results.length > 0)
  results.forEach((result) => t.deepEqual(result.messages, [], result.filePath))
})
