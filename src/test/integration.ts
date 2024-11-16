import test from 'ava'
import { mkdtemp } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { execa } from 'execa'
import { projectRoot } from './_util.js'
import path from 'node:path'

test('integration', async (t) => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- `npm install` might take long
  t.timeout(1000 * 60)

  const cwd = await mkdtemp(tmpdir() + path.sep)

  const { stdout: packageFileName } = await execa(
    'npm',
    ['pack', '--pack-destination', cwd],
    {
      cwd: projectRoot,
    },
  )

  await execa('npm', ['init', '--yes'], { cwd })

  await execa('npm', ['install', path.join(cwd, packageFileName)], {
    cwd,
  })

  await execa('node', ['--eval', 'import("eslint-config-love")'], { cwd })

  t.pass()
})
