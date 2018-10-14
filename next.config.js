const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

function addPolyfill(config) {
  const originalEntry = config.entry;
  /* eslint-disable */
  config.entry = async () => {
    const entries = await originalEntry();
    if (entries['main.js']) {
      entries['main.js'].unshift('babel-polyfill');
    }
    return entries;
  };
}

const conf = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config) {
    addPolyfill(config);
    return commonsChunkConfig(config, /\.(sass|scss|css)$/);
  },
};

module.exports = withSass(withImages(withCss(conf)));