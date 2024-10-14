import project from './lib/index.js'

export default [
  project,
  {
    files: ['**/*.cjs', '**/*.js', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js', 'commitlint.config.js'],
          defaultProject: './tsconfig.json',
        },
      },
    },
  },
  {
    ignores: ['lib/'],
  },
]
