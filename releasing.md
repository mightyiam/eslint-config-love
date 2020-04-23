# Making a release

1. Make sure you have access to publish, by running `$ npm access ls-collaborators`.
1. While on the main branch, with a clean working directory, `$ git checkout -b release`.
1. `$ npm run prepare-release`. If that was unsuccessful, investigate. If it was successful, the version is bumped and a new commit exists.
2. Create a new pull request from this branch. The name of the pull request can be same as the commit message.
3. "Rebase and merge" the pull request.
4. Switch to the main branch and `$ git pull`.
5. `$ git tag v$VERSION`, where `$VERSION` is the new version. For example, `$ git tag v16.0.0`.
6. `$ git push --tags`
7. `npm publish`
