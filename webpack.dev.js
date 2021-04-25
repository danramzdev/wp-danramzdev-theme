const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
        // exclude: [/node_modules/],
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          {
            // After all CSS loaders, we use a plugin to do its work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: 'postcss-loader',
          },
          {
            // First we transform SASS to standard CSS
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../style.css',
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'localhost/project',
        open: 'external',
        files: ['./**/*.php', './**/*.scss', './**/*.sass', './**/*.css', './**/*.js'],
      },
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false,
      }
    ),
  ],
  mode: 'development',
};
