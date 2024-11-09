import type { PluginRuleEntries } from '../rules.js'

const rules: PluginRuleEntries = {
  pluginName: 'eslint-comments',
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
