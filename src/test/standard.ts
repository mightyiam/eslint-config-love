import test from 'ava'
import standardPkg from 'eslint-config-standard/package.json'
import { equivalents, getPkgDetails, ourRules, standardRules } from './_util'

if (standardRules === undefined) throw new Error('`eslint-config-standard` does not seem to be exporting rules')

test('Own peerDependencies include those of eslint-config-standard', async (t) => {
  const { ourPeerDeps } = await getPkgDetails()
  Object
    .entries(standardPkg.peerDependencies)
    .forEach(([_name, standardDep]) => {
      // https://github.com/microsoft/TypeScript/pull/12253
      const name = _name as keyof typeof standardPkg.peerDependencies
      const ourDep = ourPeerDeps[name]
      t.is(ourDep, standardDep, name)
    })
})

test('Exported rule values do not reference eslint-config-standard ones', (t) => {
  for (const ruleName in standardRules) {
    if (typeof standardRules[ruleName] !== 'object') continue // Non-objects use copy-by-value

    t.false(ourRules[`@typescript-eslint/${ruleName}`] === standardRules[ruleName])
  }
})

test('all direct equivalents are used', (t) => {
  const unusedDirectEquivalents = equivalents
    .filter((rule) => Object.prototype.hasOwnProperty.call(standardRules, rule) && !Object.prototype.hasOwnProperty.call(ourRules, `@typescript-eslint/${rule}`))
  t.deepEqual(unusedDirectEquivalents, [])
})

test('configs of equivalents are supersets of upstream', async (t) => {
  const { diff: justDiff } = await import('just-diff')
  equivalents.forEach((ruleName) => {
    const standardRuleConfig = standardRules[ruleName]
    const ourRuleConfig = ourRules[`@typescript-eslint/${ruleName}`]
    const diff = justDiff({ _: standardRuleConfig }, { _: ourRuleConfig })
    diff.forEach((diff) => {
      if (diff.op !== 'add') {
        t.log(ruleName, { standardRuleConfig, ourRuleConfig, diff })
        t.fail()
      }
      t.pass()
    })
  })
})
