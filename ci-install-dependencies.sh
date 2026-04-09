set -euxo pipefail

# https://github.com/npm/cli/issues/9151
npm install --global npm@~11.10.0
npm --version

npm install --global npm@latest
npm --version
npm ci
