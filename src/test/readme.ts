import test from 'ava'
import semver from 'semver'
import npmPkgArg from 'npm-package-arg'
import { getPkgDetails } from './_util'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

test('yarn install args in readme satisfy peerDeps', async (t) => {
  const { pkgJson, pkgPath, ourPeerDeps } = await getPkgDetails()
  const readme = (await readFile(resolve(pkgPath, '..', 'readme.md'))).toString()
  const match = readme.match(/```\n(yarn add .*?)```/s)
  if (match === null) throw new Error("couldn't find yarn add")
  if (match.length === 0) throw new Error('failed to find code block')
  if (match.length > 2) throw new Error('matched multiple code blocks')
  const installArgRanges = Object.fromEntries(
    match[1]
      .replace(/\\/g, '')
      .trim()
      .split('\n')
      .slice(1)
      .map(arg => {
        const { name, fetchSpec: range } = npmPkgArg(arg.trim())
        if (name === null) throw new Error()
        if (range === null) throw new Error()
        return [name, range] as const
      })
      .filter(([name]) => name !== pkgJson.name)
  )
  Object.entries(ourPeerDeps as Record<string, string>).forEach(([name, peerDepRange]) => {
    t.true(Object.prototype.hasOwnProperty.call(installArgRanges, name), `missing peerDep ${name} in install args`)
    const installArgRange = installArgRanges[name]
    t.true(
      semver.subset(installArgRange, peerDepRange),
      `${name} install arg range ${installArgRange} is not a subset of peerDep range ${peerDepRange}`
    )
  })
  const installArgsLength = Object.keys(installArgRanges).length
  const ourPeerDepsLength = Object.keys(ourPeerDeps).length
  t.false(installArgsLength > ourPeerDepsLength, 'more install args than peer deps')
  t.false(ourPeerDepsLength > installArgsLength, 'more peer deps than install args')
})
