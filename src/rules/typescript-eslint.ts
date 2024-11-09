import type { PluginRuleEntries } from '../rules.js'

const rules: PluginRuleEntries = {
  plugin: '@typescript-eslint',
  rules: {
    'adjacent-overload-signatures': ['error'],
    'array-type': ['error', { default: 'array-simple' }],
    'await-thenable': ['error'],
    'ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- just enough to prevent abbreviations
        minimumDescriptionLength: 3,
      },
    ],
    'ban-tslint-comment': ['error'],
    'class-literal-property-style': ['error', 'fields'],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [],
        enforceForClassFields: true,
        ignoreOverrideMethods: false,
        ignoreClassesThatImplementAnInterface: false,
      },
    ],
    'consistent-generic-constructors': ['error', 'constructor'],
    'consistent-indexed-object-style': ['error', 'record'],
    'consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    'consistent-type-definitions': ['error', 'interface'],
    'consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    'consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],
    'dot-notation': [
      'error',
      {
        allowIndexSignaturePropertyAccess: false,
        allowKeywords: true,
        allowPattern: '',
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
      },
    ],
    'explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      },
    ],
    'init-declarations': ['error', 'always'],
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- an arbitrary count
    'max-params': ['error', { max: 4 }],
    'method-signature-style': ['error'],
    'naming-convention': [
      'error',
      {
        selector: 'variableLike',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    'no-array-constructor': ['error'],
    'no-array-delete': ['error'],
    'no-base-to-string': ['error'],
    'no-confusing-non-null-assertion': ['error'],
    'no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: false, ignoreVoidOperator: false },
    ],
    'no-deprecated': ['warn'],
    'no-dupe-class-members': ['error'],
    'no-duplicate-enum-values': ['error'],
    'no-duplicate-type-constituents': [
      'error',
      { ignoreIntersections: false, ignoreUnions: false },
    ],
    'no-dynamic-delete': ['error'],
    'no-empty-function': [
      'error',
      {
        allow: [],
      },
    ],
    'no-empty-object-type': [
      'error',
      { allowInterfaces: 'with-single-extends', allowObjectTypes: 'never' },
    ],
    'no-explicit-any': [
      'error',
      { fixToUnknown: false, ignoreRestArgs: false },
    ],
    'no-extra-non-null-assertion': ['error'],
    'no-extraneous-class': ['error', { allowWithDecorator: true }],
    'no-floating-promises': ['error'],
    'no-for-in-array': ['error'],
    'no-implied-eval': ['error'],
    'no-import-type-side-effects': ['error'],
    'no-inferrable-types': [
      'error',
      { ignoreParameters: false, ignoreProperties: false },
    ],
    'no-invalid-void-type': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': [
      'error',
      {
        ignore: [],
        ignoreArrayIndexes: false,
        ignoreDefaultValues: false,
        ignoreClassFieldInitialValues: false,
        // https://github.com/mightyiam/eslint-config-love/issues/1786
        enforceConst: false,
        detectObjects: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: false,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: false,
      },
    ],
    'no-meaningless-void-operator': ['error', { checkNever: true }],
    'no-misused-new': ['error'],
    'no-misused-promises': ['error'],
    'no-mixed-enums': ['error'],
    'no-namespace': ['error'],
    'no-non-null-asserted-nullish-coalescing': ['error'],
    'no-non-null-asserted-optional-chain': ['error'],
    'no-non-null-assertion': ['error'],
    'no-redundant-type-constituents': ['error'],
    'no-require-imports': ['error', { allow: [], allowAsImport: false }],
    'no-this-alias': ['error', { allowDestructuring: true }],
    'no-unnecessary-boolean-literal-compare': ['error'],
    'no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: true,
      },
    ],
    'no-unnecessary-parameter-property-assignment': ['error'],
    'no-unnecessary-qualifier': ['error'],
    'no-unnecessary-template-expression': ['error'],
    'no-unnecessary-type-arguments': ['error'],
    'no-unnecessary-type-assertion': ['error'],
    'no-unnecessary-type-constraint': ['error'],
    'no-unnecessary-type-parameters': ['error'],
    'no-unsafe-argument': ['error'],
    'no-unsafe-assignment': ['error'],
    'no-unsafe-call': ['error'],
    'no-unsafe-declaration-merging': ['error'],
    'no-unsafe-enum-comparison': ['error'],
    'no-unsafe-function-type': ['error'],
    'no-unsafe-member-access': ['error'],
    'no-unsafe-return': ['error'],
    'no-unsafe-unary-minus': ['error'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        enums: false,
        variables: false,
        typedefs: false,
      },
    ],
    'no-useless-constructor': ['error'],
    'no-useless-empty-export': ['error'],
    'no-wrapper-object-types': ['error'],
    'non-nullable-type-assertion-style': ['error'],
    'only-throw-error': [
      'error',
      { allowThrowingAny: false, allowThrowingUnknown: false },
    ],
    'prefer-as-const': ['error'],
    'prefer-destructuring': [
      'error',
      { array: true, object: true },
      {
        enforceForRenamedProperties: true,
        enforceForDeclarationWithTypeAnnotation: false,
      },
    ],
    'prefer-find': ['error'],
    'prefer-for-of': ['error'],
    'prefer-function-type': ['error'],
    'prefer-includes': ['error'],
    'prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
    'prefer-namespace-keyword': ['error'],
    'prefer-nullish-coalescing': [
      'error',
      { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false },
    ],
    'prefer-optional-chain': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-readonly': ['error'],
    'prefer-reduce-type-parameter': ['error'],
    'prefer-regexp-exec': ['error'],
    'prefer-return-this-type': ['error'],
    'prefer-string-starts-ends-with': [
      'error',
      { allowSingleElementEquality: 'never' },
    ],
    'promise-function-async': ['error'],
    'require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    'restrict-plus-operands': ['error', { skipCompoundAssignments: false }],
    'restrict-template-expressions': ['error', { allowNumber: true }],
    'return-await': ['error', 'always'],
    'strict-boolean-expressions': [
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
    'triple-slash-reference': [
      'error',
      { lib: 'never', path: 'never', types: 'never' },
    ],
    'unbound-method': ['error', { ignoreStatic: false }],
  },
}

export default rules
