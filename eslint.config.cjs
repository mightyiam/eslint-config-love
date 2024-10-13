module.exports = [
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('.'),
  {
    files: ['**/*.cjs', '**/*.js', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.cjs', 'commitlint.config.js'],
          defaultProject: './tsconfig.json',
        },
      },
    },
  },
  {
    ignores: ['lib/'],
  },
]
