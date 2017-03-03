/**
* Webpack config for Smarter Kit
* ------------------------------
* This has been kept as simple as possible to make it easy to understand.
* Feel free to modify to suit as needed.
*/

const { resolve } = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  // This is the main file that gets loaded first; the "bootstrap", if you will.
  entry: resolve(__dirname, 'render-server.js'),

  output: { // Transpiled and bundled output gets put in `build/bundle.js`.
    path: resolve(__dirname, 'dist'),
    publicPath: '/assets/', // But it gets served as "assets" for testing purposes.
    filename: 'index.js',   // Really, you want to upload dist/index.html and dist/bundle.js
    libraryTarget: 'umd', // This needs to be UMD or CommonJS for the sake of the static site gen plugin
  },

  // This makes it easier to debug scripts by listing line number of whichever file
  // threw the exception or console.log or whathaveyounot.
  devtool: 'inline-source-map',
  // Alternative options:
  // @see https://webpack.js.org/configuration/devtool/
  // devtool: 'cheap-module-eval-source-map',
  // devtool: 'eval-source-map',

  // How to resolve certain types of files
  resolve: {
    // This enables one to leave off the .jsx or .js extension when importing
    extensions: ['.jsx', '.js'],
  },

  // All the loaders are defined here. This is where Webpack really starts to shine!
  // @see https://webpack.js.org/configuration/module/
  module: {
    rules: [
      // This is the main rule for loading JS and JSX files using Babel.
      {
        test: /\.(js|jsx)$/,
        include: [
          resolve(__dirname, 'src'),
          resolve(__dirname, 'node_modules', 'g-ui'), // For consuming g-ui as a package
          resolve(__dirname, '..', 'g-ui'), // For developing g-ui locally
        ],
        loader: 'babel-loader',
      },
      // This nifty bit of magic right here allows us to load entire JSON files
      // synchronously using `require`, just like in NodeJS.
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      // Lastly, this enables you to load Sass files into modules (like g-ui).
      {
        test: /\.scss$/,
        include: [
          resolve(__dirname),
          resolve(__dirname, 'bower_components'),
          resolve(__dirname, 'node_modules', 'g-ui'), // For consuming g-ui as a package
          resolve(__dirname, '..', 'g-ui'), // For developing g-ui locally
          resolve(__dirname, '..', 'g-ui', 'bower_components'), // For developing g-ui locally
        ],
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
    ],
  },

  // Sundry plugins needed for stuff to work properly.
  plugins: [
    new StaticSiteGeneratorPlugin(),
  ],
};
