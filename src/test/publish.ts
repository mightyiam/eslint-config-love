import test from 'ava'
import { projectRoot } from './_util.js'
import { execa } from 'execa'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import type { Options } from 'semantic-release'
import assert from 'node:assert'
import { load } from 'js-yaml'
import { writeFile, mkdir, open } from 'node:fs/promises'
import { generateNotes } from '@semantic-release/release-notes-generator'

test('semantic-release dry-run', async (t) => {
  const realConfigText = await readFile(join(projectRoot, '.releaserc.yml'), {
    encoding: 'utf8',
  })

  const realConfigYaml = load(realConfigText)

  const realConfig: Options =
    typeof realConfigYaml === 'object' && realConfigYaml !== null
      ? realConfigYaml
      : assert.fail()

  if (realConfig.plugins === undefined) throw new Error()

  realConfig.plugins = realConfig.plugins.filter((plugin) => {
    const [name] =
      typeof plugin === 'string'
        ? [plugin]
        : Array.isArray(plugin)
          ? plugin
          : assert.fail()

    return ![
      // requires token
      '@semantic-release/github',
      // requires token
      '@semantic-release/npm',
    ].includes(name)
  })

  const cwd = join(import.meta.dirname, `publish-test-fixture`)
  await mkdir(cwd, { recursive: true })
  const desiredContent = JSON.stringify(realConfig)
  const fixtureConfigPath = join(cwd, '.releaserc.json')
  await (await open(fixtureConfigPath, 'a')).close()

  const actualContent = await readFile(fixtureConfigPath, { encoding: 'utf8' })

  if (actualContent !== desiredContent) {
    await writeFile(fixtureConfigPath, desiredContent)
  }

  await execa('npx', ['semantic-release', '--dry-run'], { cwd })

  t.pass()
})

// prevents this incompatibility: https://github.com/conventional-changelog/conventional-changelog/issues/1495
test('changelog generation', async (t) => {
  const notes = await generateNotes(
    { preset: 'conventionalcommits' },
    {
      commits: [
        {
          hash: 'abc1234',
          message: 'feat: yadayada',
        },
      ],
      lastRelease: { gitTag: 'v1.0.0', version: '1.0.0', gitHead: '0000000' },
      nextRelease: { gitTag: 'v1.1.0', version: '1.1.0', gitHead: 'abc1234' },
      options: { repositoryUrl: 'https://example.com/example.git' },
    },
  )

  t.true(notes.includes('yadayada'))
})
