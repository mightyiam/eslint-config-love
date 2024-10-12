import exported from '..'
import { plugin as tseslintPlugin } from 'typescript-eslint'
import { TSESLint } from '@typescript-eslint/utils'
import semver from 'semver'
import type { PackageJson } from 'type-fest'

interface PkgDetails {
  pkgPath: string
  pkgJson: PackageJson
  ourDeps: NonNullable<PackageJson['dependencies']>
  ourPeerDeps: NonNullable<PackageJson['peerDependencies']>
  ourDevDeps: NonNullable<PackageJson['devDependencies']>
}

export const getPkgDetails = async (): Promise<PkgDetails> => {
  const { readPackageUp } = await import('read-pkg-up')
  const readResult = await readPackageUp()
  if (readResult === undefined) {
    throw new Error()
  }
  const ourPkg = readResult.packageJson
  if (ourPkg.dependencies === undefined) {
    throw new Error()
  }
  const ourDeps = ourPkg.dependencies
  if (ourPkg.peerDependencies === undefined) {
    throw new Error()
  }
  const ourPeerDeps = ourPkg.peerDependencies
  if (ourPkg.devDependencies === undefined) {
    throw new Error()
  }
  const ourDevDeps = ourPkg.devDependencies
  return {
    pkgJson: ourPkg,
    pkgPath: readResult.path,
    ourDeps,
    ourPeerDeps,
    ourDevDeps,
  }
}

export const isSingleCaretRange = (rangeStr: string): boolean => {
  const range = new semver.Range(rangeStr)
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  if (range.set.length !== 1) return false
  const comparators = range.set[0]
  if (comparators.length !== 2) return false
  return comparators[0].operator === '>=' && comparators[1].operator === '<'
  /* eslint-enable @typescript-eslint/no-magic-numbers */
}

export const isPinnedRange = (rangeStr: string): boolean => {
  const range = new semver.Range(rangeStr)
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  if (range.set.length !== 1) return false
  const comparators = range.set[0]
  return comparators.length === 1 && comparators[0].operator === ''
  /* eslint-enable @typescript-eslint/no-magic-numbers */
}

export const extractVersionRange = (spec: string): string =>
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  spec.split('@').slice(-1)[0]

const ourRules_ = exported.rules
if (ourRules_ === undefined) throw new Error('we seem to be exporting no rules')
export const ourRules = ourRules_

export const equivalents = [
  ...new TSESLint.Linter({ configType: 'eslintrc' }).getRules().keys(),
].filter((name) =>
  Object.prototype.hasOwnProperty.call(tseslintPlugin.rules, name),
)
