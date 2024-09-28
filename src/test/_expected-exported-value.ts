import type { TSESLint } from '@typescript-eslint/utils'
import { parser, plugin as tseslintPlugin } from 'typescript-eslint'
import * as importPlugin from 'eslint-plugin-import'
import * as nPlugin from 'eslint-plugin-n'
import * as promisePlugin from 'eslint-plugin-promise'

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
  'class-methods-use-this': ['off'],
  'constructor-super': ['error'],
  curly: ['error', 'multi-line'],
  'default-case-last': ['error'],
  'dot-notation': ['off'],
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'init-declarations': ['off'],
  'max-params': ['off'],
  'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
  'no-array-constructor': ['off'],
  'no-async-promise-executor': ['error'],
  'no-caller': ['error'],
  'no-case-declarations': ['error'],
  'no-class-assign': ['error'],
  'no-compare-neg-zero': ['error'],
  'no-cond-assign': ['error'],
  'no-const-assign': ['error'],
  'no-constant-condition': ['error', { checkLoops: false }],
  'no-control-regex': ['error'],
  'no-debugger': ['error'],
  'no-delete-var': ['error'],
  'no-dupe-args': ['error'],
  'no-dupe-class-members': ['off'],
  'no-dupe-keys': ['error'],
  'no-duplicate-case': ['error'],
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-empty-character-class': ['error'],
  'no-empty-function': ['off'],
  'no-empty-pattern': ['error'],
  'no-eval': ['error'],
  'no-ex-assign': ['error'],
  'no-extend-native': ['error'],
  'no-extra-bind': ['error'],
  'no-extra-boolean-cast': ['error'],
  'no-fallthrough': ['error'],
  'no-func-assign': ['error'],
  'no-global-assign': ['error'],
  'no-implied-eval': ['off'],
  'no-import-assign': ['error'],
  'no-invalid-regexp': ['error'],
  'no-irregular-whitespace': ['error'],
  'no-iterator': ['error'],
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': ['error'],
  'no-loop-func': ['off'],
  'no-loss-of-precision': ['error'],
  'no-magic-numbers': ['off'],
  'no-misleading-character-class': ['error'],
  'no-multi-str': ['error'],
  'no-new': ['error'],
  'no-new-func': ['error'],
  'no-new-symbol': ['error'],
  'no-new-wrappers': ['error'],
  'no-obj-calls': ['error'],
  'no-object-constructor': ['error'],
  'no-octal': ['error'],
  'no-octal-escape': ['error'],
  'no-proto': ['error'],
  'no-prototype-builtins': ['error'],
  'no-redeclare': ['off'],
  'no-regex-spaces': ['error'],
  'no-return-assign': ['error', 'except-parens'],
  'no-self-assign': ['error', { props: true }],
  'no-self-compare': ['error'],
  'no-sequences': ['error'],
  'no-shadow-restricted-names': ['error'],
  'no-sparse-arrays': ['error'],
  'no-template-curly-in-string': ['error'],
  'no-this-before-super': ['error'],
  'no-throw-literal': ['off'],
  'no-undef-init': ['error'],
  'no-unexpected-multiline': ['error'],
  'no-unmodified-loop-condition': ['error'],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable': ['error'],
  'no-unreachable-loop': ['error'],
  'no-unsafe-finally': ['error'],
  'no-unsafe-negation': ['error'],
  'no-unused-expressions': ['off'],
  'no-unused-vars': ['off'],
  'no-use-before-define': ['off'],
  'no-useless-backreference': ['error'],
  'no-useless-call': ['error'],
  'no-useless-catch': ['error'],
  'no-useless-computed-key': ['error'],
  'no-useless-constructor': ['off'],
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
  'prefer-promise-reject-errors': ['off'],
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

export const expectedImportRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  'import/export': ['error'],
  'import/first': ['error'],
  'import/no-absolute-path': [
    'error',
    { esmodule: true, commonjs: true, amd: false },
  ],
  'import/no-duplicates': ['error'],
  'import/no-named-default': ['error'],
  'import/no-webpack-loader-syntax': ['error'],
}

export const expectedNRules: Record<string, TSESLint.SharedConfig.RuleEntry> = {
  'n/handle-callback-err': ['error', '^(err|error)$'],
  'n/no-callback-literal': ['error'],
  'n/no-deprecated-api': ['error'],
  'n/no-exports-assign': ['error'],
  'n/no-new-require': ['error'],
  'n/no-path-concat': ['error'],
  'n/process-exit-as-throw': ['error'],
}

export const expectedPromiseRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  'promise/param-names': ['error'],
}

export const expectedTseslintRules: Record<
  string,
  TSESLint.SharedConfig.RuleEntry
> = {
  '@typescript-eslint/adjacent-overload-signatures': ['error'],
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/await-thenable': ['error'],
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      minimumDescriptionLength: 3,
    },
  ],
  '@typescript-eslint/ban-tslint-comment': ['error'],
  '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
  '@typescript-eslint/class-methods-use-this': [
    'error',
    {
      exceptMethods: [],
      enforceForClassFields: true,
      ignoreOverrideMethods: false,
      ignoreClassesThatImplementAnInterface: false,
    },
  ],
  '@typescript-eslint/consistent-generic-constructors': [
    'error',
    'constructor',
  ],
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/dot-notation': [
    'error',
    {
      allowIndexSignaturePropertyAccess: false,
      allowKeywords: true,
      allowPattern: '',
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
      allowDirectConstAssertionInArrowFunctions: true,
    },
  ],
  '@typescript-eslint/init-declarations': ['error', 'always'],
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  '@typescript-eslint/max-params': ['error', { max: 4 }],
  '@typescript-eslint/method-signature-style': ['error'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variableLike',
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
  ],
  '@typescript-eslint/no-array-constructor': ['error'],
  '@typescript-eslint/no-array-delete': ['error'],
  '@typescript-eslint/no-base-to-string': ['error'],
  '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: false, ignoreVoidOperator: false },
  ],
  '@typescript-eslint/no-deprecated': ['warn'],
  '@typescript-eslint/no-dupe-class-members': ['error'],
  '@typescript-eslint/no-duplicate-enum-values': ['error'],
  '@typescript-eslint/no-duplicate-type-constituents': [
    'error',
    { ignoreIntersections: false, ignoreUnions: false },
  ],
  '@typescript-eslint/no-dynamic-delete': ['error'],
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: [],
    },
  ],
  '@typescript-eslint/no-empty-object-type': [
    'error',
    { allowInterfaces: 'with-single-extends', allowObjectTypes: 'never' },
  ],
  '@typescript-eslint/no-explicit-any': [
    'error',
    { fixToUnknown: false, ignoreRestArgs: false },
  ],
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],
  '@typescript-eslint/no-extraneous-class': [
    'error',
    { allowWithDecorator: true },
  ],
  '@typescript-eslint/no-floating-promises': ['error'],
  '@typescript-eslint/no-for-in-array': ['error'],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-import-type-side-effects': ['error'],
  '@typescript-eslint/no-inferrable-types': [
    'error',
    { ignoreParameters: false, ignoreProperties: false },
  ],
  '@typescript-eslint/no-invalid-void-type': ['error'],
  '@typescript-eslint/no-loop-func': ['error'],
  '@typescript-eslint/no-magic-numbers': [
    'error',
    {
      ignore: [],
      ignoreArrayIndexes: false,
      ignoreDefaultValues: false,
      ignoreClassFieldInitialValues: false,
      enforceConst: true,
      detectObjects: true,
      ignoreEnums: true,
      ignoreNumericLiteralTypes: false,
      ignoreReadonlyClassProperties: true,
      ignoreTypeIndexes: false,
    },
  ],
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    { checkNever: true },
  ],
  '@typescript-eslint/no-misused-new': ['error'],
  '@typescript-eslint/no-misused-promises': ['error'],
  '@typescript-eslint/no-mixed-enums': ['error'],
  '@typescript-eslint/no-namespace': ['error'],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
  '@typescript-eslint/no-non-null-assertion': ['error'],
  '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
  '@typescript-eslint/no-redundant-type-constituents': ['error'],
  '@typescript-eslint/no-require-imports': [
    'error',
    { allow: [], allowAsImport: false },
  ],
  '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
  '@typescript-eslint/no-unnecessary-condition': [
    'error',
    {
      allowConstantLoopConditions: true,
    },
  ],
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': ['error'],
  '@typescript-eslint/no-unnecessary-qualifier': ['error'],
  '@typescript-eslint/no-unnecessary-template-expression': ['error'],
  '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
  '@typescript-eslint/no-unsafe-argument': ['error'],
  '@typescript-eslint/no-unsafe-function-type': ['error'],
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: false,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'none',
      caughtErrors: 'none',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      enums: false,
      variables: false,
      typedefs: false,
    },
  ],
  '@typescript-eslint/no-useless-constructor': ['error'],
  '@typescript-eslint/no-wrapper-object-types': ['error'],
  '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
  '@typescript-eslint/only-throw-error': [
    'error',
    { allowThrowingAny: false, allowThrowingUnknown: false },
  ],
  '@typescript-eslint/prefer-function-type': ['error'],
  '@typescript-eslint/prefer-includes': ['error'],
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false },
  ],
  '@typescript-eslint/prefer-optional-chain': ['error'],
  '@typescript-eslint/prefer-promise-reject-errors': ['error'],
  '@typescript-eslint/prefer-readonly': ['error'],
  '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
  '@typescript-eslint/prefer-return-this-type': ['error'],
  '@typescript-eslint/promise-function-async': ['error'],
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true },
  ],
  '@typescript-eslint/restrict-plus-operands': [
    'error',
    { skipCompoundAssignments: false },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    { allowNumber: true },
  ],
  '@typescript-eslint/return-await': ['error', 'always'],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false,
    },
  ],
  '@typescript-eslint/triple-slash-reference': [
    'error',
    { lib: 'never', path: 'never', types: 'never' },
  ],
  '@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }],
}

export const expectedExportedRules = {
  ...expectedEslintRules,
  ...expectedImportRules,
  ...expectedNRules,
  ...expectedPromiseRules,
  ...expectedTseslintRules,
}

export const expectedExportedValue: TSESLint.FlatConfig.Config = {
  languageOptions: {
    parser,
    parserOptions: {
      projectService: true,
    },
  },

  plugins: {
    '@typescript-eslint': tseslintPlugin,
    import: importPlugin,
    n: nPlugin,
    promise: promisePlugin,
  },
  rules: expectedExportedRules,
}
