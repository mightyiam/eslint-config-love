# Contributing

Contributions are welcome.

## Guidelines

To avoid wasted effort,
consider [discussing](https://github.com/mightyiam/eslint-config-love/discussions) your ideas before implementing them.

We do have tests.
Please run them.
If a test's purpose isn't clear, please file an issue.

Please make commits and pull requests accurate.
If a change can stand on its own, please submit it as its own pull request.

Please use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
See commit history as example.

## Updating the `eslint` dependency

Core rule names and their deprecation are vendored in [`src/test/_eslint-rules-metadata.ts`](./src/test/_eslint-rules-metadata.ts).
They are generated from the [docs package](https://github.com/eslint/eslint/blob/main/docs/package.json) of the corresponding `eslint` release, which is not published to npm.
After updating the `eslint` dependency, please run `npm run generate/eslint-rules-metadata`.
Otherwise, a test fails.

## Contribution suggestion: consider new rules

There's a list of not yet considered rules in [this test file](./src/test/rules-to-consider.ts).
Pick one — perhaps the first one — and consider it.
Is it appropriate for this config?
If so, [suggest](https://github.com/mightyiam/eslint-config-love/discussions) adding it.
