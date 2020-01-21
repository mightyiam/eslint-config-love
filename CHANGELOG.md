# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
