import type { PluginRuleEntries } from '../rules.js'

const rules: PluginRuleEntries = {
  plugin: 'eslint-comments',
  rules: {
    'require-description': [
      'error',
      {
        ignore: ['eslint-enable', 'eslint-env'],
      },
    ],
  },
}

export default rules
