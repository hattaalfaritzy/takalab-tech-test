module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['app'],
        alias: {
          assets: './app/assets',
          components: './app/components',
          config: './app/config',
          lib: './app/lib',
          models: './app/models',
          navigation: './app/navigation',
          screens: './app/screens',
          services: './app/services',
          store: './app/store',
          utils: './app/utils',
        },
      },
    },
  },
  rules: {
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
  },
};
