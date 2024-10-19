<div align="center">
  <img src="./logo.svg" width="150"/>
  <h1>eslint-config-love</h1>

![GitHub License](https://img.shields.io/github/license/mightyiam/eslint-config-love)
[![main branch checks status](https://img.shields.io/github/check-runs/mightyiam/eslint-config-love/main)](https://github.com/mightyiam/eslint-config-love/actions/workflows/ci.yaml)
[![npm](https://img.shields.io/npm/v/eslint-config-love)](https://www.npmjs.com/package/eslint-config-love)
![Dependent repos prior to rename](https://img.shields.io/librariesio/dependent-repos/npm/eslint-config-standard-with-typescript?label="dependent%20repos%20prior%20to%20rename")
![Dependent repos](https://img.shields.io/librariesio/dependent-repos/npm/eslint-config-love)
![GitHub Repo stars](https://img.shields.io/github/stars/mightyiam/eslint-config-love)

_A TypeScript ESLint config that loves you_

</div>

## Description

This is an [ESLint shareable configuration](https://eslint.org/docs/latest/use/core-concepts#shareable-configurations).

- No framework/library-specific rules
- Safety at the cost of verbosity
- Convention over arbitrary choice
- No formatting rules (please use a formatter)
- No rules that are covered by strict TypeScript

## Versioning

Any change that might require a user to make changes beyond upgrading this package is considered major.
For example, rule addition are obviously major.
It is expected that most version bumps will be major.

## Example config

Here is an example `eslint.config.js`.

```js
import love from 'eslint-config-love'

export default [
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
  },
]
```

[Learn how to configure ESLint](https://eslint.org/docs/latest/use/configure/).

Note: the config exported by this package sets `languageOptions.parserOptions.project = true`.
Read about the `project` option [here](https://typescript-eslint.io/packages/parser/#project).

There are [some more `parserOptions`](https://typescript-eslint.io/packages/parser/#configuration) you may care about.

## Example command line usage:

```
$ npx eslint .
```

## Disabling rules

As with any ESLint configuration, some ad-hoc [disabling of rules](https://eslint.org/docs/latest/use/configure/rules#disabling-rules) is expected.
It is further expected that the strict nature of this configuration would more frequently require the disabling of rules.

Consider minimizing the scope in which rules are disabled;
prefer using `eslint-disable-*` comments when possible.
Otherwise, rules can be disabled for a subset of files using configuration.

## Contributing

This project is developed primarily in remote mob programming format.
[See schedule and how to apply here](https://mobusoperandi.com/mobs/love.html).

Otherwise, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Sponsoring

To ensure the continuity of this project, consider [sponsoring the author](https://github.com/sponsors/mightyiam).
