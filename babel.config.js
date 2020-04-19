module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.ios.js',
          '.ios.ts',
          '.android.js',
          '.android.ts',
        ],
        alias: {
          '@app': './src',
        },
      },
    ],
    'jest-hoist',
  ],
};
