const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'dripsy',
    '@dripsy/core',
    'moti',
    'app',
    'react-native-reanimated',
    '@expo/html-elements',
    'react-native-gesture-handler',
    'react-native-web-linear-gradient',
    'react-native-vector-icons',
    "@react-native/assets",
    "expo",
    "expo-asset",
    "expo-font",
    "expo-modules-core",
    "@expo/vector-icons",
  ],
}

module.exports = withExpo(
  withFonts(nextConfig)
);
