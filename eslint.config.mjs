export default [
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['node_modules/**', 'dist/**'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
