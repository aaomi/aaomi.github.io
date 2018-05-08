var _assign = require('lodash/assign'),
  webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  MinifyPlugin = require("babel-minify-webpack-plugin"),
  __PROD__ = process.env.NODE_ENV === 'production',
  __DEV__ = !__PROD__,
  BABEL_LOADER_PRESETS_PRODUCTION = ['env', 'react', 'stage-0'],
  BABEL_LOADER_PRESETS_DEVELOPMENT = BABEL_LOADER_PRESETS_PRODUCTION.concat(['react-hmre']),
  BABEL_RULE_CONFIG_PRODUCTION = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          presets: BABEL_LOADER_PRESETS_PRODUCTION
        }
      }
    ]
  },
  BABEL_JS_RULE_CONFIG_DEVELOPMENT = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          presets: BABEL_LOADER_PRESETS_DEVELOPMENT
        }
      }
    ]
  };

var config = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              mimeType: 'application/octet-stream'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules'
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      template: 'index.pug',
      filename: '../index_compiled.html',
      title: 'Upbound at work',
      description: 'Upbound at work',
      author: 'AAoM'
    })
  ]
};

if (__DEV__) {
  config.devServer = {
    historyApiFallback: true
  };

  config.module.rules.push(
    {
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: 'eslint-loader'
    },
    BABEL_JS_RULE_CONFIG_DEVELOPMENT
  );

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  );

} else if (__PROD__) {
  config.module.rules.push(
    BABEL_RULE_CONFIG_PRODUCTION
  );

  config.plugins.push(
    new MinifyPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

module.exports = config;
