// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Enable CSS support
  isCSSEnabled: true,
});

// Add any custom config here
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs'];
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

module.exports = config;
