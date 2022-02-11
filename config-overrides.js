const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    // '@types': path.resolve(__dirname, 'src/types'),
    '@models': path.resolve(__dirname, 'src/models'),
    '@redux': path.resolve(__dirname, 'src/redux'),
  }),
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: [
            './src/styles/constants/_colors.scss',
            './src/styles/constants/_sizes.scss',
            './src/styles/mixins/_flexbox.scss',
            './src/styles/mixins/_font.scss',
            './src/styles/mixins/_position.scss',
          ],
        },
      });
    }
  })
);
