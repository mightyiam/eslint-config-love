import exported from '..'
import { plugin as tseslintPlugin } from 'typescript-eslint'
import { TSESLint } from '@typescript-eslint/utils'
import semver from 'semver'
import { type PackageJson } from 'type-fest'

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
  return (
    range.set.length === 1 &&
    range.set[0].length === 2 &&
    range.set[0][0].operator === '>=' &&
    range.set[0][1].operator === '<'
  )
}

export const isPinnedRange = (rangeStr: string): boolean => {
  const range = new semver.Range(rangeStr)
  return (
    range.set.length === 1 &&
    range.set[0].length === 1 &&
    range.set[0][0].operator === ''
  )
}

export const extractVersionRange = (spec: string): string =>
  spec.split('@').slice(-1)[0]

const ourRules_ = exported.rules
if (ourRules_ === undefined) throw new Error('we seem to be exporting no rules')
export const ourRules = ourRules_

export const equivalents = [...new TSESLint.Linter().getRules().keys()].filter(
  (name) => Object.prototype.hasOwnProperty.call(tseslintPlugin.rules, name),
)
