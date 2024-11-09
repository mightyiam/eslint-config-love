import plugin from 'eslint-plugin-promise'
import type { PluginUsage } from '../rules.js'

const rules: PluginUsage = {
  pluginName: 'promise',
  plugin,
  rules: {
    'param-names': ['error'],
  },
}

export default rules
