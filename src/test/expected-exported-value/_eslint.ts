import type { TSESLint } from '@typescript-eslint/utils'

export const expectedEslintRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  'accessor-pairs': [
    'error',
    {
      setWithoutGet: true,
      getWithoutSet: false,
      enforceForClassMembers: true,
    },
  ],
  'array-callback-return': [
    'error',
    {
      allowImplicit: false,
      allowVoid: false,
      checkForEach: false,
    },
  ],
  'arrow-body-style': [
    'error',
    'as-needed',
    { requireReturnForObjectLiteral: false },
  ],
  complexity: [
    'error',
    {
      variant: 'modified',
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- arbitrary choice
      max: 10,
    },
  ],
  'consistent-this': ['error', 'that'],
  'constructor-super': ['error'],
  curly: ['error', 'multi-line'],
  'default-case-last': ['error'],
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'for-direction': ['error'],
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': ['error'],
  'logical-assignment-operators': [
    'error',
    'always',
    { enforceForIfStatements: true },
  ],
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- default plus one
  'max-depth': ['error', { max: 5 }],
  'max-lines': [
    'error',
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- default plus 150
    { max: 450, skipBlankLines: true, skipComments: true },
  ],
  'max-nested-callbacks': [
    'error',
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- arbitrary value
    { max: 3 },
  ],
  'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
  'no-alert': ['error'],
  'no-async-promise-executor': ['error'],
  'no-caller': ['error'],
  'no-case-declarations': ['error'],
  'no-class-assign': ['error'],
  'no-compare-neg-zero': ['error'],
  'no-cond-assign': ['error'],
  'no-console': ['error'],
  'no-const-assign': ['error'],
  'no-constant-binary-expression': ['error'],
  'no-constant-condition': ['error', { checkLoops: false }],
  'no-constructor-return': ['error'],
  'no-control-regex': ['error'],
  'no-debugger': ['error'],
  'no-delete-var': ['error'],
  'no-dupe-args': ['error'],
  'no-dupe-else-if': ['error'],
  'no-dupe-keys': ['error'],
  'no-duplicate-case': ['error'],
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-empty-character-class': ['error'],
  'no-empty-pattern': ['error'],
  'no-empty-static-block': ['error'],
  'no-eval': ['error'],
  'no-ex-assign': ['error'],
  'no-extend-native': ['error'],
  'no-extra-bind': ['error'],
  'no-extra-boolean-cast': ['error'],
  'no-fallthrough': ['error'],
  'no-func-assign': ['error'],
  'no-global-assign': ['error'],
  'no-import-assign': ['error'],
  'no-invalid-regexp': ['error'],
  'no-irregular-whitespace': ['error'],
  'no-iterator': ['error'],
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': ['error'],
  'no-loss-of-precision': ['error'],
  'no-misleading-character-class': ['error'],
  'no-multi-str': ['error'],
  'no-new': ['error'],
  'no-new-func': ['error'],
  'no-new-native-nonconstructor': ['error'],
  'no-new-wrappers': ['error'],
  'no-obj-calls': ['error'],
  'no-object-constructor': ['error'],
  'no-octal': ['error'],
  'no-octal-escape': ['error'],
  'no-proto': ['error'],
  'no-prototype-builtins': ['error'],
  'no-regex-spaces': ['error'],
  'no-return-assign': ['error', 'except-parens'],
  'no-self-assign': ['error', { props: true }],
  'no-self-compare': ['error'],
  'no-sequences': ['error'],
  'no-shadow-restricted-names': ['error'],
  'no-sparse-arrays': ['error'],
  'no-template-curly-in-string': ['error'],
  'no-this-before-super': ['error'],
  'no-unexpected-multiline': ['error'],
  'no-unmodified-loop-condition': ['error'],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable': ['error'],
  'no-unreachable-loop': ['error'],
  'no-unsafe-finally': ['error'],
  'no-unsafe-negation': ['error'],
  'no-useless-backreference': ['error'],
  'no-useless-call': ['error'],
  'no-useless-catch': ['error'],
  'no-useless-computed-key': ['error'],
  'no-useless-escape': ['error'],
  'no-useless-rename': ['error'],
  'no-useless-return': ['error'],
  'no-var': ['error'],
  'no-void': ['error', { allowAsStatement: true }],
  'no-with': ['error'],
  'object-shorthand': ['warn', 'properties'],
  'one-var': ['error', { initialized: 'never' }],
  'prefer-const': [
    'error',
    { destructuring: 'all', ignoreReadBeforeAssign: false },
  ],
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'symbol-description': ['error'],
  'unicode-bom': ['error', 'never'],
  'use-isnan': [
    'error',
    {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    },
  ],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  yoda: ['error', 'never'],
}
