import test from 'ava'
import exported from '.'
import standardPkg from 'eslint-config-standard/package.json'
import readPkgUp, { NormalizedPackageJson } from 'read-pkg-up'

interface OurDeps {
  ourPeerDeps: NonNullable<NormalizedPackageJson['peerDependencies']>
  ourDevDeps: NonNullable<NormalizedPackageJson['devDependencies']>
}

const getOurDeps = async (): Promise<OurDeps> => {
  const readResult = await readPkgUp()
  if (readResult === undefined) { throw new Error() }
  const ourPkg = readResult.packageJson
  if (ourPkg.peerDependencies === undefined) { throw new Error() }
  const ourPeerDeps = ourPkg.peerDependencies
  if (ourPkg.devDependencies === undefined) { throw new Error() }
  const ourDevDeps = ourPkg.devDependencies
  return { ourPeerDeps, ourDevDeps }
}

test('export', (t): void => {
  const expected = {
    extends: 'eslint-config-standard',
    plugins: ['@typescript-eslint'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        rules: {
          'brace-style': 'off',
          camelcase: 'off',
          indent: 'off',
          'no-array-constructor': 'off',
          'no-undef': 'off',
          'no-unused-vars': 'off',
          'no-use-before-define': 'off',
          'no-unused-expressions': 'off',
          'no-useless-constructor': 'off',
          quotes: 'off',
          '@typescript-eslint/adjacent-overload-signatures': 'error',
          '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
          '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
          '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
          '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
              assertionStyle: 'as',
              objectLiteralTypeAssertions: 'never'
            }
          ],
          '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
          '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowDirectConstAssertionInArrowFunctions: true
          }],
          '@typescript-eslint/indent': ['error', 2, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: ['TemplateLiteral *']
          }],
          '@typescript-eslint/member-delimiter-style': [
            'error',
            {
              multiline: { delimiter: 'none' },
              singleline: { delimiter: 'comma', requireLast: false }
            }
          ],
          '@typescript-eslint/no-array-constructor': 'error',
          '@typescript-eslint/no-empty-function': 'error',
          '@typescript-eslint/no-empty-interface': 'error',
          '@typescript-eslint/no-extraneous-class': 'error',
          '@typescript-eslint/no-floating-promises': 'error',
          '@typescript-eslint/no-for-in-array': 'error',
          '@typescript-eslint/no-misused-new': 'error',
          '@typescript-eslint/no-misused-promises': 'error',
          '@typescript-eslint/no-namespace': 'error',
          '@typescript-eslint/no-non-null-assertion': 'error',
          '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
          '@typescript-eslint/no-unnecessary-type-assertion': 'error',
          '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
          '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
          '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }],
          '@typescript-eslint/no-useless-constructor': 'error',
          '@typescript-eslint/no-var-requires': 'error',
          '@typescript-eslint/prefer-function-type': 'error',
          '@typescript-eslint/prefer-readonly': 'error',
          '@typescript-eslint/promise-function-async': 'error',
          '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
          '@typescript-eslint/restrict-plus-operands': 'error',
          '@typescript-eslint/require-array-sort-compare': 'error',
          '@typescript-eslint/require-await': 'error',
          '@typescript-eslint/strict-boolean-expressions': 'error',
          '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
          '@typescript-eslint/type-annotation-spacing': 'error'
        }
      }
    ]
  }

  t.deepEqual(exported, expected)
})

test('Own peerDependencies include those of eslint-config-standard', async (t) => {
  const { ourPeerDeps } = await getOurDeps()
  Object
    .entries(standardPkg.peerDependencies)
    .forEach(([_name, standardRange]) => {
      // https://github.com/microsoft/TypeScript/pull/12253
      const name = _name as keyof typeof standardPkg.peerDependencies
      const ourRange = ourPeerDeps[name]
      t.is(ourRange, standardRange)
    })
})

test('Dependency @typescript-eslint/eslint-plugin', async (t) => {
  const { ourPeerDeps, ourDevDeps } = await getOurDeps()
  const peerDepPluginRange = ourPeerDeps['@typescript-eslint/eslint-plugin']
  const devDepPluginRange = ourDevDeps['@typescript-eslint/eslint-plugin']
  t.true(peerDepPluginRange.startsWith('>='))
  t.true(devDepPluginRange.startsWith('^'))
  t.is(
    peerDepPluginRange.split('>=')[1],
    devDepPluginRange.split('^')[1]
  )
})
