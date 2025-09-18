import type { TSESLint } from '@typescript-eslint/utils'
import { parser } from 'typescript-eslint'
import { rules, plugins } from './plugin-usage.js'

const config: TSESLint.FlatConfig.Config = {
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },

  languageOptions: {
    parser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins,
  rules,
}

export default config

// Optional test-friendly overrides for common test file patterns
export const testOverrides: TSESLint.FlatConfig.Config = {
  files: [
    '**/__tests__/**',
    '**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
  rules: {
    // Tests often contain small illustrative numbers and nested callbacks
    '@typescript-eslint/no-magic-numbers': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
  },
}

// Convenience helper: include tests overrides alongside the base config
export const withTests = (): TSESLint.FlatConfig.Config[] => [config, testOverrides]