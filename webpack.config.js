var webpack = require('webpack'),
  path = require('path'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  MinifyPlugin = require('babel-minify-webpack-plugin'),
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
  },
  WEBPACK_BUILD_DIRECTORY = 'docs/';

var config = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: path.join(__dirname, 'index.js'),
    vendor: path.join(__dirname, 'vendor.js')
  },
  output: {
    path: path.join(__dirname, WEBPACK_BUILD_DIRECTORY),
    publicPath: __PROD__ ? WEBPACK_BUILD_DIRECTORY : '/',
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
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        // minify imported images and copy them to build directory
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            query: {
              hash: 'sha512',
              digest: 'hex',
              name: '[name].[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        // copy imported fonts to build directory
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          query: {
            hash: 'sha512',
            digest: 'hex',
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __PROD__,
      __DEV__
    }),
    new CleanWebpackPlugin([
      path.join(__dirname, WEBPACK_BUILD_DIRECTORY)
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      template: path.join(__dirname, 'index.pug'),
      filename: (__PROD__ ? '../' : '') + 'index.html',
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
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  );

} else if (__PROD__) {
  config.output.filename = '[name].[hash].js';

  config.module.rules.push(
    BABEL_RULE_CONFIG_PRODUCTION
  );

  config.plugins.push(
    new ExtractTextPlugin('[name].[hash].css'),
    new MinifyPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  );
}

module.exports = config;
