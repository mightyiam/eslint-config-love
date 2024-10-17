import exported from '../index.js'
import { plugin as tseslintPlugin } from 'typescript-eslint'
import { TSESLint } from '@typescript-eslint/utils'
import semver from 'semver'
import { readPackageUp } from 'read-package-up'

const readResult = await readPackageUp()
if (readResult === undefined) {
  throw new Error()
}
const { packageJson: ourPkg } = readResult
if (ourPkg.dependencies === undefined) {
  throw new Error()
}
export const { dependencies: ourDeps } = ourPkg
if (ourPkg.peerDependencies === undefined) {
  throw new Error()
}
export const { peerDependencies: ourPeerDeps } = ourPkg
if (ourPkg.devDependencies === undefined) {
  throw new Error()
}
export const { devDependencies: ourDevDeps } = ourPkg

export const isSingleCaretRange = (rangeStr: string): boolean => {
  const range = new semver.Range(rangeStr)
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  if (range.set.length !== 1) return false
  // eslint-disable-next-line @typescript-eslint/prefer-destructuring
  const [comparators] = range.set
  if (comparators.length !== 2) return false
  return comparators[0].operator === '>=' && comparators[1].operator === '<'
  /* eslint-enable @typescript-eslint/no-magic-numbers */
}

export const isPinnedRange = (rangeStr: string): boolean => {
  const range = new semver.Range(rangeStr)
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  if (range.set.length !== 1) return false
  // eslint-disable-next-line @typescript-eslint/prefer-destructuring
  const [comparators] = range.set
  return comparators.length === 1 && comparators[0].operator === ''
  /* eslint-enable @typescript-eslint/no-magic-numbers */
}

export const extractVersionRange = (spec: string): string =>
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  spec.split('@').slice(-1)[0]

const { rules: ourRules_ } = exported
if (ourRules_ === undefined) throw new Error('we seem to be exporting no rules')
export const ourRules = ourRules_

export const equivalents = [
  ...new TSESLint.Linter({ configType: 'eslintrc' }).getRules().keys(),
].filter((name) =>
  Object.prototype.hasOwnProperty.call(tseslintPlugin.rules, name),
)
