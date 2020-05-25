import config from 'eslint-config-standard/eslintrc.json'
import { Linter } from 'eslint'

const casted = config as unknown as Linter.Config

export default casted
