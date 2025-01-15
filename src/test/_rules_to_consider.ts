export const rulesToConsider: Record<string, string[]> = {
  'eslint-comments': [],
  '': [
    'no-await-in-loop',
    'no-eq-null',
    'no-extra-label',
    'no-implicit-coercion',
    'no-implicit-globals',
    'no-inline-comments',
    'no-inner-declarations',
    'no-invalid-this',
    'no-label-var',
    'no-lonely-if',
    'no-multi-assign',
    'no-negated-condition',
    'no-nested-ternary',
    'no-nonoctal-decimal-escape',
    'no-param-reassign',
    'no-plusplus',
    'no-promise-executor-return',
    'no-restricted-exports',
    'no-restricted-globals',
    'no-restricted-properties',
    'no-restricted-syntax',
    'no-script-url',
    'no-setter-return',
    'no-ternary',
    'no-undef',
    'no-undefined',
    'no-underscore-dangle',
    'no-unsafe-optional-chaining',
    'no-unused-labels',
    'no-unused-private-class-members',
    'no-useless-assignment',
    'no-useless-concat',
    'no-warning-comments',
    'operator-assignment',
    'prefer-arrow-callback',
    'prefer-exponentiation-operator',
    'prefer-named-capture-group',
    'prefer-numeric-literals',
    'prefer-object-has-own',
    'prefer-object-spread',
    'prefer-rest-params',
    'prefer-spread',
    'prefer-template',
    'radix',
    'require-atomic-updates',
    'require-unicode-regexp',
    'require-yield',
    'sort-imports',
    'sort-keys',
    'sort-vars',
    'strict',
    'vars-on-top',
  ],
  import: [
    'import/consistent-type-specifier-style',
    'import/default',
    'import/dynamic-import-chunkname',
    'import/exports-last',
    'import/extensions',
    'import/group-exports',
    'import/max-dependencies',
    'import/named',
    'import/namespace',
    'import/newline-after-import',
    'import/no-amd',
    'import/no-anonymous-default-export',
    'import/no-commonjs',
    'import/no-cycle',
    'import/no-default-export',
    'import/no-deprecated',
    'import/no-dynamic-require',
    'import/no-empty-named-blocks',
    'import/no-extraneous-dependencies',
    'import/no-import-module-exports',
    'import/no-internal-modules',
    'import/no-mutable-exports',
    'import/no-named-as-default',
    'import/no-named-as-default-member',
    'import/no-named-export',
    'import/no-namespace',
    'import/no-nodejs-modules',
    'import/no-relative-packages',
    'import/no-relative-parent-imports',
    'import/no-restricted-paths',
    'import/no-self-import',
    'import/no-unassigned-import',
    'import/no-unresolved',
    'import/no-unused-modules',
    'import/no-useless-path-segments',
    'import/order',
    'import/prefer-default-export',
    'import/unambiguous',
  ],
  n: [
    'n/callback-return',
    'n/exports-style',
    'n/file-extension-in-import',
    'n/global-require',
    'n/hashbang',
    'n/no-extraneous-import',
    'n/no-extraneous-require',
    'n/no-missing-import',
    'n/no-missing-require',
    'n/no-mixed-requires',
    'n/no-process-env',
    'n/no-process-exit',
    'n/no-sync',
    'n/no-unpublished-bin',
    'n/no-unpublished-import',
    'n/no-unpublished-require',
    'n/no-unsupported-features/es-builtins',
    'n/no-unsupported-features/es-syntax',
    'n/no-unsupported-features/node-builtins',
    'n/prefer-global/buffer',
    'n/prefer-global/console',
    'n/prefer-global/process',
    'n/prefer-global/text-decoder',
    'n/prefer-global/text-encoder',
    'n/prefer-global/url',
    'n/prefer-global/url-search-params',
    'n/prefer-node-protocol',
    'n/prefer-promises/dns',
    'n/prefer-promises/fs',
  ],
  promise: [
    'promise/no-multiple-resolved',
    'promise/no-native',
    'promise/no-nesting',
    'promise/no-new-statics',
    'promise/no-promise-in-callback',
    'promise/no-return-in-finally',
    'promise/no-return-wrap',
    'promise/prefer-await-to-callbacks',
    'promise/prefer-await-to-then',
    'promise/prefer-catch',
    'promise/spec-only',
    'promise/valid-params',
  ],
  '@typescript-eslint': ['@typescript-eslint/no-misused-spread'],
}
