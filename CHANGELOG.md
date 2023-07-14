## [36.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v36.0.0...v36.0.1) (2023-07-14)


### Bug fixes

* retrieval of active node versions in ci ([5ccd9a6](https://github.com/standard/eslint-config-standard-with-typescript/commit/5ccd9a66eb16363129c7f1f7ef70914aacef6cfa))

## [36.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v35.0.0...v36.0.0) (2023-06-30)


### ⚠ BREAKING CHANGES

* the rules are provided at the top level,
instead of under an `overrides` property.
Providing the rules under the `overrides` property was never a good idea.
It prevents specifying which files the rules apply to (e.g. `[*.js, *.ts]`).
I apologize.
To migrate, make sure that your `extends` property is under an [`overrides` item][overrides].
An example is in the readme.
To help verify your configuration,
you could obtain a list of files that will be linted, this way:
`DEBUG=eslint:cli-engine npx eslint <path>`.

[overrides]: https://eslint.org/docs/latest/use/configure/configuration-files#how-do-overrides-work

### Bug fixes

* rules are at top level (not under overrides) ([25401c9](https://github.com/standard/eslint-config-standard-with-typescript/commit/25401c96a8cdb218cf7c26330d3968bf7acf544c)), closes [#1149](https://github.com/standard/eslint-config-standard-with-typescript/issues/1149) [#1088](https://github.com/standard/eslint-config-standard-with-typescript/issues/1088)

## [35.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v34.0.1...v35.0.0) (2023-06-02)


### ⚠ BREAKING CHANGES

* minimum @typescript-eslint is corrected to be 5.50.0

Co-authored-by: Rostislav Simonik <rostislav.simonik@technologystudio.sk>

### Build system / dependencies

* **renovate:** do not bump [@typescript-eslint](https://github.com/typescript-eslint)_bottom/* ([73c439e](https://github.com/standard/eslint-config-standard-with-typescript/commit/73c439e0ff62b6dd6e155927c2186ba90aa4f65b)), closes [#1083](https://github.com/standard/eslint-config-standard-with-typescript/issues/1083)


### Testing

* assign to config.overrides.parser in compatibility config test ([2e62830](https://github.com/standard/eslint-config-standard-with-typescript/commit/2e628302fdf485c75345421aa78daec0eaf0e3ca))
* bottom peerDep compatibility test actually works ([73da75f](https://github.com/standard/eslint-config-standard-with-typescript/commit/73da75f7e6387d1eb5be24b3cf931fc8eb28cb14))


### Bug fixes

* bump minimum [@typescript-eslint](https://github.com/typescript-eslint) to 5.50.0 ([0c83fdb](https://github.com/standard/eslint-config-standard-with-typescript/commit/0c83fdb36dddc7fdd8bf908c41436eac28f9271e))

## [34.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v34.0.0...v34.0.1) (2023-03-14)


### Testing

* equivalents not used upstream not considered ([7354da5](https://github.com/standard/eslint-config-standard-with-typescript/commit/7354da5b2b0f336d13ed6958446fd47aeadd5401))


### Bug fixes

* bump plugin peerDep ([fb46a90](https://github.com/standard/eslint-config-standard-with-typescript/commit/fb46a90ee126dcbd852105c037f057b81ce468c9)), closes [#1064](https://github.com/standard/eslint-config-standard-with-typescript/issues/1064)

## [34.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v33.0.0...v34.0.0) (2023-02-01)


### ⚠ BREAKING CHANGES

* @typescript-eslint/key-spacing

### Features

* @typescript-eslint/key-spacing ([f1d8be3](https://github.com/standard/eslint-config-standard-with-typescript/commit/f1d8be39dfeb4c59511690d91a311f15b8f425dc))

## [33.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v32.0.0...v33.0.0) (2023-01-27)


### ⚠ BREAKING CHANGES

* @typescript-eslint/class-literal-property-style

Co-authored-by: Shahar Dawn Or <mightyiampresence@gmail.com>

### Features

* @typescript-eslint/class-literal-property-style ([35093cb](https://github.com/standard/eslint-config-standard-with-typescript/commit/35093cb3acc58cfba1685b10098e80311c115b8c))

## [32.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v31.0.0...v32.0.0) (2023-01-24)


### ⚠ BREAKING CHANGES

* @typescript-eslint/consistent-type-{imports/exports}

Co-authored-by: Rostislav Simonik <rostislav.simonik@technologystudio.sk>

### Features

* @typescript-eslint/consistent-type-{imports/exports} ([bf0f96f](https://github.com/standard/eslint-config-standard-with-typescript/commit/bf0f96fb05492c89dc9f6865e94c9b44455a6bd9))

## [31.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v30.0.0...v31.0.0) (2023-01-19)


### ⚠ BREAKING CHANGES

* @typescript-eslint/consistent-generic-constructors

### Features

* @typescript-eslint/consistent-generic-constructors ([0248ed7](https://github.com/standard/eslint-config-standard-with-typescript/commit/0248ed7edafe5440a915bca6ea14bbf59ef9d730))

## [30.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v29.0.0...v30.0.0) (2023-01-17)


### ⚠ BREAKING CHANGES

* @typescript-eslint/ban-types

### Features

* @typescript-eslint/ban-types ([94fcc73](https://github.com/standard/eslint-config-standard-with-typescript/commit/94fcc736c0fac1b7aba743310cb5f1ee382d8d3f))

## [29.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v28.0.0...v29.0.0) (2023-01-17)


### ⚠ BREAKING CHANGES

* @typescript-eslint/ban-tslint-comment

### Features

* @typescript-eslint/ban-tslint-comment ([6aa6817](https://github.com/standard/eslint-config-standard-with-typescript/commit/6aa6817592b576a981cfa69b155d74b34617f736))

## [28.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v27.0.1...v28.0.0) (2023-01-17)


### ⚠ BREAKING CHANGES

* @typescript-eslint/ban-ts-comment

Co-authored-by: Shahar Dawn Or <mightyiampresence@gmail.com>

### Features

* @typescript-eslint/ban-ts-comment ([13e53c0](https://github.com/standard/eslint-config-standard-with-typescript/commit/13e53c0a318e700eb9e455e7d01427262d24d780))

## [27.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v27.0.0...v27.0.1) (2023-01-12)


### Documentation

* fix readme ci badge ([f05c5d1](https://github.com/standard/eslint-config-standard-with-typescript/commit/f05c5d1ce00e433ebfe29ab4e830a174b0afee07))

## [27.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v26.0.0...v27.0.0) (2023-01-12)


### ⚠ BREAKING CHANGES

* add @typescript-eslint/await-thenable

Co-authored-by: Shahar Dawn Or <mightyiampresence@gmail.com>

### Features

* add @typescript-eslint/await-thenable ([7dad1a9](https://github.com/standard/eslint-config-standard-with-typescript/commit/7dad1a9dab1e2810b736d733d846958824ef513f))


### Testing

* all plugin rules are considered ([f91887f](https://github.com/standard/eslint-config-standard-with-typescript/commit/f91887fef97627f9f5974a7182bc9ac45d05f3f6))
* correct 'all plugin rules are considered' ([6863028](https://github.com/standard/eslint-config-standard-with-typescript/commit/68630282d1701aeef15020f9384905d5c18250d4))


### Build system / dependencies

* latest node.js in publish job ([0c8d8f8](https://github.com/standard/eslint-config-standard-with-typescript/commit/0c8d8f856027f114af60052ee71bb5f6807259cd))

## [26.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v25.0.0...v26.0.0) (2023-01-03)


### ⚠ BREAKING CHANGES

* add @typescript-eslint/no-confusing-void-expression

Co-authored-by: Rostislav Simonik <rostislav.simonik@technologystudio.sk>

### Features

* add @typescript-eslint/no-confusing-void-expression ([15ce349](https://github.com/standard/eslint-config-standard-with-typescript/commit/15ce349ee4a1cc63c15caf2b9e289d75ce4aaab2))

## [25.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v24.0.0...v25.0.0) (2023-01-03)


### ⚠ BREAKING CHANGES

* add @typescript-eslint/no-unnecessary-type-constraint

Co-authored-by: Rostislav Simonik <rostislav.simonik@technologystudio.sk>

### Features

* add @typescript-eslint/no-unnecessary-type-constraint ([3451bac](https://github.com/standard/eslint-config-standard-with-typescript/commit/3451bace1de3dbd2b8396eef9703e916aa9b7985))

## [24.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v23.0.0...v24.0.0) (2022-12-14)


### ⚠ BREAKING CHANGES

* add rule consistent-indexed-object-style

### Features

* add rule consistent-indexed-object-style ([2edd0af](https://github.com/standard/eslint-config-standard-with-typescript/commit/2edd0af76e7b5b78c35b1427dea91de58d730e19))


### Build system / dependencies

* workaround some commitlint issue ([a202f4b](https://github.com/standard/eslint-config-standard-with-typescript/commit/a202f4b0ff71fab410fdffdd0f396cfbec218b9d))

## [23.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v22.0.0...v23.0.0) (2022-09-13)


### ⚠ BREAKING CHANGES

* add rules from @typescript-eslint: no-extra-parens,
no-loss-of-precision, object-curly-spacing, space-before-blocks,
comma-dangle.

### Features

* use all typescript-eslint equivalents ([1e8764d](https://github.com/standard/eslint-config-standard-with-typescript/commit/1e8764d179444003c26ba8aeec17b1d4a83fd86a)), closes [#582](https://github.com/standard/eslint-config-standard-with-typescript/issues/582) [#583](https://github.com/standard/eslint-config-standard-with-typescript/issues/583)


### CI

* continuous delivery ([971c680](https://github.com/standard/eslint-config-standard-with-typescript/commit/971c680632a89a1252c17aef868283e8b7f35a4e)), closes [#840](https://github.com/standard/eslint-config-standard-with-typescript/issues/840)


### Build system / dependencies

* renovate automergeMinor github actions ([02dde9d](https://github.com/standard/eslint-config-standard-with-typescript/commit/02dde9d15a39312603bb98737d87d8f344ea3057)), closes [#910](https://github.com/standard/eslint-config-standard-with-typescript/issues/910)

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [22.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v21.0.1...v22.0.0) (2022-07-06)


### ⚠ BREAKING CHANGES

* the dependency eslint-config-standard is now pinned.
* several peerDep bumps including eslint@^8.0.1 (was

### Features

* pin eslint-config-standard dependency ([5bbd534](https://github.com/standard/eslint-config-standard-with-typescript/commit/5bbd5343e3b4a101909fa8e32c34183adb5d68b4)), closes [#849](https://github.com/standard/eslint-config-standard-with-typescript/issues/849)
* support ESLint v8 ([dc25743](https://github.com/standard/eslint-config-standard-with-typescript/commit/dc25743534d992f6607bb2d391c7ab9d2c143d61))


### Bug Fixes

* log [#759](https://github.com/standard/eslint-config-standard-with-typescript/issues/759) as breaking change ([519a8bc](https://github.com/standard/eslint-config-standard-with-typescript/commit/519a8bc7477eb2267ffcc56a180ac6295ed7e8d8)), closes [#806](https://github.com/standard/eslint-config-standard-with-typescript/issues/806)
* peer-depend on any version of typescript ([3446e30](https://github.com/standard/eslint-config-standard-with-typescript/commit/3446e30dacdf019ee08f16b430cee876797a3a0c)), closes [#604](https://github.com/standard/eslint-config-standard-with-typescript/issues/604)
* use typescript-eslint version of space-infix-ops rule ([e57051c](https://github.com/standard/eslint-config-standard-with-typescript/commit/e57051c80616a70a49c00bc5f4d03341f0d7959a))

### [21.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v21.0.0...v21.0.1) (2021-08-31)

## [21.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v20.0.0...v21.0.0) (2021-08-29)


### ⚠ BREAKING CHANGES

* **package:** peer dependencies are specified with `^`.

### Bug Fixes

* **deps:** expand eslint-plugin-promise peerDep to equal upstream ([dcc5a33](https://github.com/standard/eslint-config-standard-with-typescript/commit/dcc5a3339cd1ba7ea5ab1bc68df0c5330ba9b859))
* **deps:** sort peer deps ([a26b179](https://github.com/standard/eslint-config-standard-with-typescript/commit/a26b1794f477b954760493e678bb55f7c4418f6c))
* **doc:** readme travis ci badge .com ([34953e6](https://github.com/standard/eslint-config-standard-with-typescript/commit/34953e648592da5855450b1571ef03d46d85a0f8))
* **no-void:** allowAsStatement ([8ab083e](https://github.com/standard/eslint-config-standard-with-typescript/commit/8ab083e311702be22db4cc7c604e55dcccd95f32))
* **package:** peerDeps use caret ranges ([b8b544d](https://github.com/standard/eslint-config-standard-with-typescript/commit/b8b544d23b1fd58d15e12fba4fe2a2ceab0705c7)), closes [#596](https://github.com/standard/eslint-config-standard-with-typescript/issues/596)
* relax rule default-param-last ([#591](https://github.com/standard/eslint-config-standard-with-typescript/issues/591)) ([8c836dc](https://github.com/standard/eslint-config-standard-with-typescript/commit/8c836dc44c4e8a1b73263259509df490c8e9fddf))

## [20.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v19.0.1...v20.0.0) (2021-01-25)


### ⚠ BREAKING CHANGES

* Now based on eslint-config-standard v16.
Also bumped some peerDeps, including eslint.
Notice removed eslint-plugin-standard peerDep.

### Features

* eslint-config-standard v16 ([020569b](https://github.com/standard/eslint-config-standard-with-typescript/commit/020569b27f5648532e8392c61aad7167151ebe81))
* require-array-sort-compare ignoreStringArrays ([#359](https://github.com/standard/eslint-config-standard-with-typescript/issues/359)) ([95fcb7c](https://github.com/standard/eslint-config-standard-with-typescript/commit/95fcb7c494fc08e953a0a0f85b5f6b464796505b))


### Bug Fixes

* **docs:** install version of @typescript-eslint/eslint-plugin@4 ([#414](https://github.com/standard/eslint-config-standard-with-typescript/issues/414)) ([51c40be](https://github.com/standard/eslint-config-standard-with-typescript/commit/51c40be4f2be486266bf265d8112aec0f871676a))

### [19.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v19.0.0...v19.0.1) (2020-09-02)


### Bug Fixes

* add @typescript-eslint/no-redeclare ([73e39a6](https://github.com/standard/eslint-config-standard-with-typescript/commit/73e39a6f96df99895af67ddb77885adff3bd7cff))

## [19.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v18.0.2...v19.0.0) (2020-09-02)


### ⚠ BREAKING CHANGES

* **deps:** minimum @typescript-eslint/eslint-plugin version bumped
to 4.0.1

### Bug Fixes

* **docs:** install version of @typescript-eslint/eslint-plugin@3 ([26691c7](https://github.com/standard/eslint-config-standard-with-typescript/commit/26691c7225f82f97561c3603d67abb0f47dfa2ae)), closes [#353](https://github.com/standard/eslint-config-standard-with-typescript/issues/353) [#351](https://github.com/standard/eslint-config-standard-with-typescript/issues/351)
* **test:** deps parser & plugin same major version ([0329cac](https://github.com/standard/eslint-config-standard-with-typescript/commit/0329cac050093150c8b1eb9f508b6828a3460fa0)), closes [#407](https://github.com/standard/eslint-config-standard-with-typescript/issues/407)


* **deps:** update eslint packages to v4 ([7275f68](https://github.com/standard/eslint-config-standard-with-typescript/commit/7275f680d448a190a59c3d4ce00d501a69a9e4df))

### [18.0.2](https://github.com/standard/eslint-config-standard-with-typescript/compare/v18.0.1...v18.0.2) (2020-05-28)


### Bug Fixes

* allow PascalCase format on variables ([14bc44c](https://github.com/standard/eslint-config-standard-with-typescript/commit/14bc44c7791e111449eab29e933d3cabceac57c0))

### [18.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v18.0.0...v18.0.1) (2020-05-27)


### Bug Fixes

* include lib/eslint-config-standard in package ([07c0aba](https://github.com/standard/eslint-config-standard-with-typescript/commit/07c0aba6b8ce7f6179013b4dcce273d3008aa313)), closes [#329](https://github.com/standard/eslint-config-standard-with-typescript/issues/329)

## [18.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v17.0.0...v18.0.0) (2020-05-27)


### ⚠ BREAKING CHANGES

* **deps:** peer dep version bump

### Features

* export is of type ESLint.Config ([1d61c3d](https://github.com/standard/eslint-config-standard-with-typescript/commit/1d61c3d620aea9e8a8ca00c488ff8ce61d39f141))


### Bug Fixes

* deep copy standardRules config ([db3467d](https://github.com/standard/eslint-config-standard-with-typescript/commit/db3467d66ff4600aa5b8aeb74876af0994f61378)), closes [#303](https://github.com/standard/eslint-config-standard-with-typescript/issues/303)


* **deps:** bump parser & plugin to v3.0.1 ([9621cde](https://github.com/standard/eslint-config-standard-with-typescript/commit/9621cde857141a3aa5b8538cc34ef70da5ae6174)), closes [#209](https://github.com/standard/eslint-config-standard-with-typescript/issues/209)

## [17.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v16.0.0...v17.0.0) (2020-05-16)


### ⚠ BREAKING CHANGES

* add rule @typescript-eslint/prefer-ts-expect-error
* bump typescript peerDep to `>=3.9`
* peerDep bump
* new rule @typescript-eslint/dot-notation
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
* new rule @typescript-eslint/lines-between-class-members
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
* new rule @typescript-eslint/no-invalid-void-type
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
* add extending rule @typescript-eslint/keyword-spacing

https://github.com/typescript-eslint/typescript-eslint/blob/v2.29.0/packages/eslint-plugin/docs/rules/keyword-spacing.md
* add rule @typescript-eslint/prefer-reduce-type-parameter

https://github.com/typescript-eslint/typescript-eslint/blob/v2.29.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
* add rule @typescript-eslint/method-signature-style
* plugin peerDep bumped to 2.29.0

### Features

* allowSingleExtends in no-empty-interface ([821005e](https://github.com/standard/eslint-config-standard-with-typescript/commit/821005e50dbe7f6b9c9acc787be6222534bc6680)), closes [#293](https://github.com/standard/eslint-config-standard-with-typescript/issues/293)
* rule @typescript-eslint/keyword-spacing ([728a592](https://github.com/standard/eslint-config-standard-with-typescript/commit/728a592775ccf0ab60c10c47bad3f8a492d77c90))
* rule @typescript-eslint/method-signature-style ([aecc59e](https://github.com/standard/eslint-config-standard-with-typescript/commit/aecc59e5cfe5c4b9200c7011f25a41abf6faa6ba))
* rule @typescript-eslint/prefer-reduce-type-parameter ([3015c46](https://github.com/standard/eslint-config-standard-with-typescript/commit/3015c460a60796095987fc087ded97ed7de49be8))
* rule @typescript-eslint/prefer-ts-expect-error ([b10a230](https://github.com/standard/eslint-config-standard-with-typescript/commit/b10a23038f2e4d8eb2fceb6f8f0a5ced716dba86))
* upgrade parser & plugin to 2.33.0 ([ce506b1](https://github.com/standard/eslint-config-standard-with-typescript/commit/ce506b17dfeb2d994043018bb1a7d4e4f00d3116)), closes [#290](https://github.com/standard/eslint-config-standard-with-typescript/issues/290) [#291](https://github.com/standard/eslint-config-standard-with-typescript/issues/291) [#295](https://github.com/standard/eslint-config-standard-with-typescript/issues/295) [#297](https://github.com/standard/eslint-config-standard-with-typescript/issues/297)


### Bug Fixes

* specify typescript as peerDep ([ce6e6ed](https://github.com/standard/eslint-config-standard-with-typescript/commit/ce6e6ed764d4c08f01cd5cf7bebcb9adead07627)), closes [#286](https://github.com/standard/eslint-config-standard-with-typescript/issues/286)
* upgrade parser & plugin to 2.29.0 ([34e0dca](https://github.com/standard/eslint-config-standard-with-typescript/commit/34e0dca60b7bf2987bbc41eb35ef7f5edad73c8a)), closes [#272](https://github.com/standard/eslint-config-standard-with-typescript/issues/272) [#273](https://github.com/standard/eslint-config-standard-with-typescript/issues/273) [#277](https://github.com/standard/eslint-config-standard-with-typescript/issues/277)

## [16.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v15.0.1...v16.0.0) (2020-04-23)


### ⚠ BREAKING CHANGES

* plugin peerDep bump
* bump plugin peerDep

### Bug Fixes

* ensure @typescript-eslint/semi rule is applied ([#275](https://github.com/standard/eslint-config-standard-with-typescript/issues/275)) ([92b21c7](https://github.com/standard/eslint-config-standard-with-typescript/commit/92b21c77ebcb386ae8d5b2b506956a452138da9c))
* remove @typescript-eslint/require-await ([657ee28](https://github.com/standard/eslint-config-standard-with-typescript/commit/657ee2825c53e2bb7e6d5e7b63b6d526f602c51c)), closes [#217](https://github.com/standard/eslint-config-standard-with-typescript/issues/217)
* upgrade parser & plugin to 2.25.0 ([99af05e](https://github.com/standard/eslint-config-standard-with-typescript/commit/99af05ecc4ebb0b4f46af6ab05f6697aac35374c)), closes [#263](https://github.com/standard/eslint-config-standard-with-typescript/issues/263)
* upgrade parser & plugin to 2.26.0 ([08c2444](https://github.com/standard/eslint-config-standard-with-typescript/commit/08c2444918f3dc7655fb4dd6dc5e79d5c02c6276)), closes [#269](https://github.com/standard/eslint-config-standard-with-typescript/issues/269)

### [15.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v15.0.0...v15.0.1) (2020-03-21)


### Bug Fixes

* bump dependency on eslint-config-standard ([dc3a348](https://github.com/standard/eslint-config-standard-with-typescript/commit/dc3a3487f5bc4c7849259954fb33e6940bba3787))

## [15.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v12.0.1...v15.0.0) (2020-03-17)


### ⚠ BREAKING CHANGES

* parser & plugin upgraded to v2.24.0
* new rule @typescript-eslint/return-await always
* parser & plugin v2.22.0 required.
* added rule @typescript-eslint/no-base-to-string.
* new rule @typescript-eslint/func-call-spacing
* upgrade plugin peerDep
* new rule @typescript-eslint/no-unnecessary-boolean-literal-compare
https://github.com/typescript-eslint/typescript-eslint/pull/242
* new rule @typescript-eslint/no-dupe-class-members
https://github.com/typescript-eslint/typescript-eslint/blob/v2.19.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
* new rule @typescript-eslint/switch-exhaustiveness-check
https://github.com/typescript-eslint/typescript-eslint/blob/v2.19.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
* new rule @typescript-eslint/prefer-as-const
https://github.com/typescript-eslint/typescript-eslint/pull/1431
* new rule @typescript-eslint/no-non-null-asserted-optional-chain
https://github.com/typescript-eslint/typescript-eslint/pull/1469
* [no-extra-non-null-assertion] flag optional chain after a non-null assertion
https://github.com/typescript-eslint/typescript-eslint/pull/1460
* **rules:** add rule prefer-includes:
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
* new rule @typescript-eslint/default-param-last
* handle JSX attributes in
@typescript-eslint/no-unnecessary-type-assertion
* new rule @typescript-eslint/no-implied-eval
* no-throw-literal uses type information.
* More optional chain support in rules.

no-use-before-define ignores enums.
* member-ordering handles enum declarations

### Features

* allow numbers in template string interpolations ([f143136](https://github.com/standard/eslint-config-standard-with-typescript/commit/f14313626932e1ac55eba74577a5e3ac695c17e9))
* new rule @typescript-eslint/return-await always ([8b4acc7](https://github.com/standard/eslint-config-standard-with-typescript/commit/8b4acc7fc1e4f80f81d2a6d166a4cf729260fce6)), closes [#199](https://github.com/standard/eslint-config-standard-with-typescript/issues/199)
* upgrade parser & plugin to 2.22.0 ([fb87883](https://github.com/standard/eslint-config-standard-with-typescript/commit/fb87883187e1925a98196e6fb45adefcd2a22427))
* upgrade parser & plugin to v2.17.0 ([11a16f4](https://github.com/standard/eslint-config-standard-with-typescript/commit/11a16f41e38ed54e151b6d209199547bd1b91ac3)), closes [#218](https://github.com/standard/eslint-config-standard-with-typescript/issues/218)
* upgrade parser & plugin to v2.18.0 ([fe2242a](https://github.com/standard/eslint-config-standard-with-typescript/commit/fe2242a1e1257dd97854acd28fd03724afda3c23)), closes [#218](https://github.com/standard/eslint-config-standard-with-typescript/issues/218)
* upgrade parser & plugin to v2.19.0 ([64fdf31](https://github.com/standard/eslint-config-standard-with-typescript/commit/64fdf3110f4f62c019da88f4970df27f9f2ddcc7)), closes [#223](https://github.com/standard/eslint-config-standard-with-typescript/issues/223)
* upgrade parser & plugin to v2.24.0 ([51a32e7](https://github.com/standard/eslint-config-standard-with-typescript/commit/51a32e72c341d32bd911a16728e228e37dfbdf9f)), closes [#247](https://github.com/standard/eslint-config-standard-with-typescript/issues/247) [#250](https://github.com/standard/eslint-config-standard-with-typescript/issues/250)
* upgrade plugin & parser to v2.11.0 ([6a378ad](https://github.com/standard/eslint-config-standard-with-typescript/commit/6a378ad6118c47b58e2beffd1d086fcbe4629d7a)), closes [#191](https://github.com/standard/eslint-config-standard-with-typescript/issues/191)
* upgrade plugin & parser to v2.12.0 ([e5cfecf](https://github.com/standard/eslint-config-standard-with-typescript/commit/e5cfecfeb09a5d6c4782f5600eb27bd3e05fd7bf)), closes [#194](https://github.com/standard/eslint-config-standard-with-typescript/issues/194)
* upgrade plugin & parser to v2.13.0 ([a0ef9e7](https://github.com/standard/eslint-config-standard-with-typescript/commit/a0ef9e7ff8d813a2f3f9679aab0dd763459ff2b8)), closes [#196](https://github.com/standard/eslint-config-standard-with-typescript/issues/196)
* upgrade plugin & parser to v2.14.0 ([af722c3](https://github.com/standard/eslint-config-standard-with-typescript/commit/af722c37ee477a44e1d109966fb5d00f56b636a9)), closes [#202](https://github.com/standard/eslint-config-standard-with-typescript/issues/202)
* upgrade plugin & parser to v2.15.0 ([f6eab66](https://github.com/standard/eslint-config-standard-with-typescript/commit/f6eab669ca862e7f88fe20a851a588f437f111d2)), closes [#203](https://github.com/standard/eslint-config-standard-with-typescript/issues/203)
* upgrade plugin & parser to v2.16.0 ([b83b82e](https://github.com/standard/eslint-config-standard-with-typescript/commit/b83b82e14be38ffd0f940953613d8d1edf8e5194)), closes [#207](https://github.com/standard/eslint-config-standard-with-typescript/issues/207)
* use [@typescript-eslint](https://github.com/typescript-eslint) func-call-spacing equivalent ([5af8a26](https://github.com/standard/eslint-config-standard-with-typescript/commit/5af8a26ffcc26ce48e2e8599c6152704c785e140)), closes [#232](https://github.com/standard/eslint-config-standard-with-typescript/issues/232)
* **rules:** add rule prefer-includes ([#148](https://github.com/standard/eslint-config-standard-with-typescript/issues/148)) ([#225](https://github.com/standard/eslint-config-standard-with-typescript/issues/225)) ([a2bdac5](https://github.com/standard/eslint-config-standard-with-typescript/commit/a2bdac52c368b9574b2f5c7d452055d5e190e32c))


### Bug Fixes

* remove @typescript-eslint/no-empty-function ([e183d4e](https://github.com/standard/eslint-config-standard-with-typescript/commit/e183d4ebc332a00ab8935f30834d95a1c7f21d22)), closes [#248](https://github.com/standard/eslint-config-standard-with-typescript/issues/248)


* upgrade parser & plugin to v2.19.2 ([443680f](https://github.com/standard/eslint-config-standard-with-typescript/commit/443680ff85f7b405ae502f7ffacef31bdd4b6afd))

## [14.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v12.0.1...v14.0.0) (2020-02-19)


### ⚠ BREAKING CHANGES

* new rule @typescript-eslint/func-call-spacing
* upgrade plugin peerDep
* new rule @typescript-eslint/no-unnecessary-boolean-literal-compare
https://github.com/typescript-eslint/typescript-eslint/pull/242
* new rule @typescript-eslint/no-dupe-class-members
https://github.com/typescript-eslint/typescript-eslint/blob/v2.19.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
* new rule @typescript-eslint/switch-exhaustiveness-check
https://github.com/typescript-eslint/typescript-eslint/blob/v2.19.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
* new rule @typescript-eslint/prefer-as-const
https://github.com/typescript-eslint/typescript-eslint/pull/1431
* new rule @typescript-eslint/no-non-null-asserted-optional-chain
https://github.com/typescript-eslint/typescript-eslint/pull/1469
* [no-extra-non-null-assertion] flag optional chain after a non-null assertion
https://github.com/typescript-eslint/typescript-eslint/pull/1460
* **rules:** add rule prefer-includes:
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
* new rule @typescript-eslint/default-param-last
* handle JSX attributes in
@typescript-eslint/no-unnecessary-type-assertion
* new rule @typescript-eslint/no-implied-eval
* no-throw-literal uses type information.
* More optional chain support in rules.

no-use-before-define ignores enums.
* member-ordering handles enum declarations

### Features

* upgrade parser & plugin to v2.17.0 ([11a16f4](https://github.com/standard/eslint-config-standard-with-typescript/commit/11a16f41e38ed54e151b6d209199547bd1b91ac3)), closes [#218](https://github.com/standard/eslint-config-standard-with-typescript/issues/218)
* upgrade parser & plugin to v2.18.0 ([fe2242a](https://github.com/standard/eslint-config-standard-with-typescript/commit/fe2242a1e1257dd97854acd28fd03724afda3c23)), closes [#218](https://github.com/standard/eslint-config-standard-with-typescript/issues/218)
* upgrade parser & plugin to v2.19.0 ([64fdf31](https://github.com/standard/eslint-config-standard-with-typescript/commit/64fdf3110f4f62c019da88f4970df27f9f2ddcc7)), closes [#223](https://github.com/standard/eslint-config-standard-with-typescript/issues/223)
* upgrade plugin & parser to v2.11.0 ([6a378ad](https://github.com/standard/eslint-config-standard-with-typescript/commit/6a378ad6118c47b58e2beffd1d086fcbe4629d7a)), closes [#191](https://github.com/standard/eslint-config-standard-with-typescript/issues/191)
* upgrade plugin & parser to v2.12.0 ([e5cfecf](https://github.com/standard/eslint-config-standard-with-typescript/commit/e5cfecfeb09a5d6c4782f5600eb27bd3e05fd7bf)), closes [#194](https://github.com/standard/eslint-config-standard-with-typescript/issues/194)
* upgrade plugin & parser to v2.13.0 ([a0ef9e7](https://github.com/standard/eslint-config-standard-with-typescript/commit/a0ef9e7ff8d813a2f3f9679aab0dd763459ff2b8)), closes [#196](https://github.com/standard/eslint-config-standard-with-typescript/issues/196)
* upgrade plugin & parser to v2.14.0 ([af722c3](https://github.com/standard/eslint-config-standard-with-typescript/commit/af722c37ee477a44e1d109966fb5d00f56b636a9)), closes [#202](https://github.com/standard/eslint-config-standard-with-typescript/issues/202)
* upgrade plugin & parser to v2.15.0 ([f6eab66](https://github.com/standard/eslint-config-standard-with-typescript/commit/f6eab669ca862e7f88fe20a851a588f437f111d2)), closes [#203](https://github.com/standard/eslint-config-standard-with-typescript/issues/203)
* use [@typescript-eslint](https://github.com/typescript-eslint) func-call-spacing equivalent ([5af8a26](https://github.com/standard/eslint-config-standard-with-typescript/commit/5af8a26ffcc26ce48e2e8599c6152704c785e140)), closes [#232](https://github.com/standard/eslint-config-standard-with-typescript/issues/232)
* **rules:** add rule prefer-includes ([#148](https://github.com/standard/eslint-config-standard-with-typescript/issues/148)) ([#225](https://github.com/standard/eslint-config-standard-with-typescript/issues/225)) ([a2bdac5](https://github.com/standard/eslint-config-standard-with-typescript/commit/a2bdac52c368b9574b2f5c7d452055d5e190e32c))
* upgrade plugin & parser to v2.16.0 ([b83b82e](https://github.com/standard/eslint-config-standard-with-typescript/commit/b83b82e14be38ffd0f940953613d8d1edf8e5194)), closes [#207](https://github.com/standard/eslint-config-standard-with-typescript/issues/207)


* upgrade parser & plugin to v2.19.2 ([443680f](https://github.com/standard/eslint-config-standard-with-typescript/commit/443680ff85f7b405ae502f7ffacef31bdd4b6afd))

## [13.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v12.0.1...v13.0.0) (2020-02-11)


### ⚠ BREAKING CHANGES

* upgrade plugin peerDep
* new rule @typescript-eslint/no-unnecessary-boolean-literal-compare
https://github.com/typescript-eslint/typescript-eslint/pull/242
* new rule @typescript-eslint/no-dupe-class-members
https://github.com/typescript-eslint/typescript-eslint/blob/v2.19.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
* new rule @typescript-eslint/switch-exhaustiveness-check
https://github.com/typescript-eslint/typescript-eslint/blob/v2.19.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
* new rule @typescript-eslint/prefer-as-const
https://github.com/typescript-eslint/typescript-eslint/pull/1431
* new rule @typescript-eslint/no-non-null-asserted-optional-chain
https://github.com/typescript-eslint/typescript-eslint/pull/1469
* [no-extra-non-null-assertion] flag optional chain after a non-null assertion
https://github.com/typescript-eslint/typescript-eslint/pull/1460
* **rules:** add rule prefer-includes:
https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
* new rule @typescript-eslint/default-param-last
* handle JSX attributes in
@typescript-eslint/no-unnecessary-type-assertion
* new rule @typescript-eslint/no-implied-eval
* no-throw-literal uses type information.
* More optional chain support in rules.

no-use-before-define ignores enums.
* member-ordering handles enum declarations

### Features

* upgrade parser & plugin to v2.17.0 ([11a16f4](https://github.com/standard/eslint-config-standard-with-typescript/commit/11a16f41e38ed54e151b6d209199547bd1b91ac3)), closes [#218](https://github.com/standard/eslint-config-standard-with-typescript/issues/218)
* upgrade parser & plugin to v2.18.0 ([fe2242a](https://github.com/standard/eslint-config-standard-with-typescript/commit/fe2242a1e1257dd97854acd28fd03724afda3c23)), closes [#218](https://github.com/standard/eslint-config-standard-with-typescript/issues/218)
* upgrade parser & plugin to v2.19.0 ([64fdf31](https://github.com/standard/eslint-config-standard-with-typescript/commit/64fdf3110f4f62c019da88f4970df27f9f2ddcc7)), closes [#223](https://github.com/standard/eslint-config-standard-with-typescript/issues/223)
* **rules:** add rule prefer-includes ([#148](https://github.com/standard/eslint-config-standard-with-typescript/issues/148)) ([#225](https://github.com/standard/eslint-config-standard-with-typescript/issues/225)) ([a2bdac5](https://github.com/standard/eslint-config-standard-with-typescript/commit/a2bdac52c368b9574b2f5c7d452055d5e190e32c))
* upgrade plugin & parser to v2.11.0 ([6a378ad](https://github.com/standard/eslint-config-standard-with-typescript/commit/6a378ad6118c47b58e2beffd1d086fcbe4629d7a)), closes [#191](https://github.com/standard/eslint-config-standard-with-typescript/issues/191)
* upgrade plugin & parser to v2.12.0 ([e5cfecf](https://github.com/standard/eslint-config-standard-with-typescript/commit/e5cfecfeb09a5d6c4782f5600eb27bd3e05fd7bf)), closes [#194](https://github.com/standard/eslint-config-standard-with-typescript/issues/194)
* upgrade plugin & parser to v2.13.0 ([a0ef9e7](https://github.com/standard/eslint-config-standard-with-typescript/commit/a0ef9e7ff8d813a2f3f9679aab0dd763459ff2b8)), closes [#196](https://github.com/standard/eslint-config-standard-with-typescript/issues/196)
* upgrade plugin & parser to v2.14.0 ([af722c3](https://github.com/standard/eslint-config-standard-with-typescript/commit/af722c37ee477a44e1d109966fb5d00f56b636a9)), closes [#202](https://github.com/standard/eslint-config-standard-with-typescript/issues/202)
* upgrade plugin & parser to v2.15.0 ([f6eab66](https://github.com/standard/eslint-config-standard-with-typescript/commit/f6eab669ca862e7f88fe20a851a588f437f111d2)), closes [#203](https://github.com/standard/eslint-config-standard-with-typescript/issues/203)
* upgrade plugin & parser to v2.16.0 ([b83b82e](https://github.com/standard/eslint-config-standard-with-typescript/commit/b83b82e14be38ffd0f940953613d8d1edf8e5194)), closes [#207](https://github.com/standard/eslint-config-standard-with-typescript/issues/207)


* upgrade parser & plugin to v2.19.2 ([443680f](https://github.com/standard/eslint-config-standard-with-typescript/commit/443680ff85f7b405ae502f7ffacef31bdd4b6afd))

### [12.0.1](https://github.com/standard/eslint-config-standard-with-typescript/compare/v12.0.0...v12.0.1) (2020-01-21)


### Bug Fixes

* disable no-dupe-class-members ([#215](https://github.com/standard/eslint-config-standard-with-typescript/issues/215)) ([3858aff](https://github.com/standard/eslint-config-standard-with-typescript/commit/3858aff0ef81e9a25fde218412e1263c46729904)), closes [#213](https://github.com/standard/eslint-config-standard-with-typescript/issues/213)

## [12.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v11.0.1...v12.0.0) (2020-01-21)


### ⚠ BREAKING CHANGES

* camelcase applies to generic types:
* restrict-plus-operands is applies to compound
assignments:
* Add rule no-extra-non-null-assertion:
* Add rule prefer-nullish-coalescing:
* Add rule prefer-optional-chain:
* add rule @typescript-eslint/restrict-template-expressions
https://github.com/typescript-eslint/typescript-eslint/blob/v2.8.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
* add rule @typescript-eslint/space-before-function-paren
https://github.com/typescript-eslint/typescript-eslint/blob/v2.8.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md
* add rule @typescript-eslint/no-dynamic-delete
https://github.com/typescript-eslint/typescript-eslint/blob/v2.8.0/packages/eslint-plugin/docs/rules/no-dynamic-delete.md

### Features

* upgrade plugin & parser to v2.10.0 ([#208](https://github.com/standard/eslint-config-standard-with-typescript/issues/208)) ([8a29629](https://github.com/standard/eslint-config-standard-with-typescript/commit/8a29629c2965ecf2f59f4e0ef339eaefde7a8dfd))
* upgrade plugin & parser to v2.9.0 ([#200](https://github.com/standard/eslint-config-standard-with-typescript/issues/200)) ([2e770df](https://github.com/standard/eslint-config-standard-with-typescript/commit/2e770df8fe51df39b732c4371d51a9bb7f9f9448)), closes [aaadf9e#diff-aaadf9e37107194e3f6679b2c8e30ec3](https://github.com/standard/aaadf9e/issues/diff-aaadf9e37107194e3f6679b2c8e30ec3) [d634f46#diff-d634f469dd550492a918f33b100f0734](https://github.com/standard/d634f46/issues/diff-d634f469dd550492a918f33b100f0734) [ef83cd2#diff-ef83cd2743d5bd1f8c7b245fca0c1367](https://github.com/standard/ef83cd2/issues/diff-ef83cd2743d5bd1f8c7b245fca0c1367) [2bbcee3#diff-2bbcee3ab3b7eb9fcdeb1aabae22e177](https://github.com/standard/2bbcee3/issues/diff-2bbcee3ab3b7eb9fcdeb1aabae22e177) [35a55a2#diff-35a55a2cbf3c835b088167bc2e912ee8](https://github.com/standard/35a55a2/issues/diff-35a55a2cbf3c835b088167bc2e912ee8) [3696b44#diff-3696b44f524c94e3a48be3795feb09a6](https://github.com/standard/3696b44/issues/diff-3696b44f524c94e3a48be3795feb09a6) [#179](https://github.com/standard/eslint-config-standard-with-typescript/issues/179)
* upgrade plugin to v2.3.3 ([cfbc821](https://github.com/standard/eslint-config-standard-with-typescript/commit/cfbc82177ec89c6a142c3bb739dc03fefab2a36a)), closes [#154](https://github.com/standard/eslint-config-standard-with-typescript/issues/154)
* upgrade plugin to v2.7.0 ([6af3971](https://github.com/standard/eslint-config-standard-with-typescript/commit/6af3971143f0204473e42891b02498fda507684d)), closes [#157](https://github.com/standard/eslint-config-standard-with-typescript/issues/157) [#159](https://github.com/standard/eslint-config-standard-with-typescript/issues/159)
* upgrade plugin to v2.8.0 ([4feb840](https://github.com/standard/eslint-config-standard-with-typescript/commit/4feb84057c35c2f252cdca95b383e2a4d01e65f0)), closes [#175](https://github.com/standard/eslint-config-standard-with-typescript/issues/175)


### Bug Fixes

* **deps:** bump parser dep to match plugin ([9b3d10d](https://github.com/standard/eslint-config-standard-with-typescript/commit/9b3d10db05bc12cd6fcf47ef60fce1f3e0958415)), closes [#197](https://github.com/standard/eslint-config-standard-with-typescript/issues/197)
* absolute paths in ignore files ([3b4ddde](https://github.com/standard/eslint-config-standard-with-typescript/commit/3b4dddef6f95c66ee9f317dda5d943474a48b45c))
* peer dependencies ([969e66b](https://github.com/standard/eslint-config-standard-with-typescript/commit/969e66b17234cdb4c28ae77b34475f959633686c)), closes [#182](https://github.com/standard/eslint-config-standard-with-typescript/issues/182) [#183](https://github.com/standard/eslint-config-standard-with-typescript/issues/183)

## [11.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v10.0.0...v11.0.0) (2019-11-15)


### ⚠ BREAKING CHANGES

* brace-style now supports TypeScript syntax.

### Features

* update eslint-config-standard@14.1.0 ([70bf8b6](https://github.com/standard/eslint-config-standard-with-typescript/commit/70bf8b63dda0cf28c0742a95a22e171ef14784a8))
* upgrade typescript-eslint packages to v2.1 ([99ced30](https://github.com/standard/eslint-config-standard-with-typescript/commit/99ced308abf93597c23dc3faafdebd3739f0ca02)), closes [#152](https://github.com/standard/eslint-config-standard-with-typescript/issues/152)
* upgrade typescript-eslint packages v2.2 ([6df903c](https://github.com/standard/eslint-config-standard-with-typescript/commit/6df903ced251e698bebb455d2b490ac4b062323e))


### Bug Fixes

* add vars:all to no-unused-vars ([e74bd4c](https://github.com/standard/eslint-config-standard-with-typescript/commit/e74bd4c2c88b2688c3cb4efa18e3f4a3f7246fa7)), closes [#168](https://github.com/standard/eslint-config-standard-with-typescript/issues/168)
* adjust two rules to imitate Standard ([c9dec53](https://github.com/standard/eslint-config-standard-with-typescript/commit/c9dec53a1835d8ddc8264ccf2ae8097aeb372395)), closes [#164](https://github.com/standard/eslint-config-standard-with-typescript/issues/164) [#165](https://github.com/standard/eslint-config-standard-with-typescript/issues/165)

## [10.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v8.0.0...v10.0.0) (2019-10-03)


### ⚠ BREAKING CHANGES

* added rule `@typescript-eslint/no-misused-promises` https://github.com/typescript-eslint/typescript-eslint/commit/28a131d
* added rule `@typescript-eslint/require-await` https://github.com/typescript-eslint/typescript-eslint/commit/807bc2d
* added rule `@typescript-eslint/prefer-readonly` https://github.com/typescript-eslint/typescript-eslint/commit/76b89a5
* added rule `@typescript-eslint/strict-boolean-expressions` https://github.com/typescript-eslint/typescript-eslint/commit/34e7d1e
* replaced rule `@typescript-eslint/no-triple-slash-reference` with `@typescript-eslint/no-reference-import` https://github.com/typescript-eslint/typescript-eslint/commit/af70a59
* eslint-config-standard@^14.0.0
* new rule: `@typescript-eslint/no-floating-promises: error`: https://github.com/typescript-eslint/typescript-eslint/blob/v1.11.0/packages/eslint-plugin/docs/rules/no-floating-promises.md
* new rule: `@typescript-eslint/no-empty-function: error`: https://github.com/typescript-eslint/typescript-eslint/blob/v1.11.0/packages/eslint-plugin/docs/rules/no-empty-function.md

### Bug Fixes

* don't use the TypeScript parser for .js files ([bad0301](https://github.com/standard/eslint-config-standard-with-typescript/commit/bad0301))
* **tsconfig.json:** utilize new tsconfig.eslint.json file ([fb0976d](https://github.com/standard/eslint-config-standard-with-typescript/commit/fb0976d))
* [no-unused-vars] Allow unused parameters ([5b70896](https://github.com/standard/eslint-config-standard-with-typescript/commit/5b70896))
* [no-use-before-define] Disable eslint version ([9d9c792](https://github.com/standard/eslint-config-standard-with-typescript/commit/9d9c792))
* add ESLint to the list of dependencies ([4600a95](https://github.com/standard/eslint-config-standard-with-typescript/commit/4600a95))
* add missing eslint dependency to readme.md ([501ba09](https://github.com/standard/eslint-config-standard-with-typescript/commit/501ba09))
* drop peerDependency of eslint-config-standard ([85d7174](https://github.com/standard/eslint-config-standard-with-typescript/commit/85d7174)), closes [#131](https://github.com/standard/eslint-config-standard-with-typescript/issues/131)
* loosen explicit-function-return-type ([bdae116](https://github.com/standard/eslint-config-standard-with-typescript/commit/bdae116)), closes [#110](https://github.com/standard/eslint-config-standard-with-typescript/issues/110)
* remove explicit-member-accessibility ([f673d9d](https://github.com/standard/eslint-config-standard-with-typescript/commit/f673d9d)), closes [#111](https://github.com/standard/eslint-config-standard-with-typescript/issues/111)
* sort the rules by type ([4e48fdc](https://github.com/standard/eslint-config-standard-with-typescript/commit/4e48fdc))
* update readme to reflect correct usage ([8a29b9e](https://github.com/standard/eslint-config-standard-with-typescript/commit/8a29b9e))


### Features

* @typescript-eslint/eslint-plugin@^1.11.0 ([ad3f043](https://github.com/standard/eslint-config-standard-with-typescript/commit/ad3f043)), closes [#99](https://github.com/standard/eslint-config-standard-with-typescript/issues/99)
* @typescript-eslint/eslint-plugin@^1.12.0 ([b41f0e5](https://github.com/standard/eslint-config-standard-with-typescript/commit/b41f0e5)), closes [#100](https://github.com/standard/eslint-config-standard-with-typescript/issues/100)
* @typescript-eslint/eslint-plugin@^1.13.0 ([72fc639](https://github.com/standard/eslint-config-standard-with-typescript/commit/72fc639)), closes [#101](https://github.com/standard/eslint-config-standard-with-typescript/issues/101)


* standard v14 ([51f4581](https://github.com/standard/eslint-config-standard-with-typescript/commit/51f4581))

## [9.0.0](https://github.com/standard/eslint-config-standard-with-typescript/compare/v8.0.0...v9.0.0) (2019-08-30)


### ⚠ BREAKING CHANGES

* added rule `@typescript-eslint/no-misused-promises` https://github.com/typescript-eslint/typescript-eslint/commit/28a131d
* added rule `@typescript-eslint/require-await` https://github.com/typescript-eslint/typescript-eslint/commit/807bc2d
* added rule `@typescript-eslint/prefer-readonly` https://github.com/typescript-eslint/typescript-eslint/commit/76b89a5
* added rule `@typescript-eslint/strict-boolean-expressions` https://github.com/typescript-eslint/typescript-eslint/commit/34e7d1e
* replaced rule `@typescript-eslint/no-triple-slash-reference` with `@typescript-eslint/no-reference-import` https://github.com/typescript-eslint/typescript-eslint/commit/af70a59
* eslint-config-standard@^14.0.0
* new rule: `@typescript-eslint/no-floating-promises: error`: https://github.com/typescript-eslint/typescript-eslint/blob/v1.11.0/packages/eslint-plugin/docs/rules/no-floating-promises.md
* new rule: `@typescript-eslint/no-empty-function: error`: https://github.com/typescript-eslint/typescript-eslint/blob/v1.11.0/packages/eslint-plugin/docs/rules/no-empty-function.md

* standard v14 ([51f4581](https://github.com/standard/eslint-config-standard-with-typescript/commit/51f4581))


### Bug Fixes

* [no-unused-vars] Allow unused parameters ([5b70896](https://github.com/standard/eslint-config-standard-with-typescript/commit/5b70896))
* [no-use-before-define] Disable eslint version ([9d9c792](https://github.com/standard/eslint-config-standard-with-typescript/commit/9d9c792))
* add ESLint to the list of dependencies ([4600a95](https://github.com/standard/eslint-config-standard-with-typescript/commit/4600a95))
* add missing eslint dependency to readme.md ([501ba09](https://github.com/standard/eslint-config-standard-with-typescript/commit/501ba09))
* drop peerDependency of eslint-config-standard ([85d7174](https://github.com/standard/eslint-config-standard-with-typescript/commit/85d7174)), closes [#131](https://github.com/standard/eslint-config-standard-with-typescript/issues/131)
* loosen explicit-function-return-type ([bdae116](https://github.com/standard/eslint-config-standard-with-typescript/commit/bdae116)), closes [#110](https://github.com/standard/eslint-config-standard-with-typescript/issues/110)
* remove explicit-member-accessibility ([f673d9d](https://github.com/standard/eslint-config-standard-with-typescript/commit/f673d9d)), closes [#111](https://github.com/standard/eslint-config-standard-with-typescript/issues/111)
* sort the rules by type ([4e48fdc](https://github.com/standard/eslint-config-standard-with-typescript/commit/4e48fdc))
* update readme to reflect correct usage ([8a29b9e](https://github.com/standard/eslint-config-standard-with-typescript/commit/8a29b9e))
* **tsconfig.json:** utilize new tsconfig.eslint.json file ([fb0976d](https://github.com/standard/eslint-config-standard-with-typescript/commit/fb0976d))


### Features

* @typescript-eslint/eslint-plugin@^1.11.0 ([ad3f043](https://github.com/standard/eslint-config-standard-with-typescript/commit/ad3f043)), closes [#99](https://github.com/standard/eslint-config-standard-with-typescript/issues/99)
* @typescript-eslint/eslint-plugin@^1.12.0 ([b41f0e5](https://github.com/standard/eslint-config-standard-with-typescript/commit/b41f0e5)), closes [#100](https://github.com/standard/eslint-config-standard-with-typescript/issues/100)
* @typescript-eslint/eslint-plugin@^1.13.0 ([72fc639](https://github.com/standard/eslint-config-standard-with-typescript/commit/72fc639)), closes [#101](https://github.com/standard/eslint-config-standard-with-typescript/issues/101)
