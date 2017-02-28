// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    // bootstrap : 'bootstrap-loader/extractStyles',

    path.join(process.cwd(), 'app/app.js'),
    // bootstrap_sass: "bootstrap-sass",

  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),

    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',

      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   useShortDoctype: true,
      //   removeEmptyAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   keepClosingSlash: true,
      //   minifyJS: true,
      //   minifyCSS: true,
      //   minifyURLs: true,
      // },
      inject: true,
    }),


    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: ['.htaccess'],

      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ['*.chunk.js'],
      },

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true,

      AppCache: false,
    }),
  ],
  module: {
      loaders: [
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2'},
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&mimetype=application/octet-stream'},
        { test: /\.otf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-otf'},
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        // {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
        { test: /\.scss/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.html$/, loader: "file?name=[name].[ext]" },
        { test: /\.css$/, loader: "file?name=[name].[ext]" },
        { test: /\.svg$/,  loader: 'svg-inline' },
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"], query: {
                presets: ['es2015', 'react']
            }},
        { test: /\.scss$/, loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass'},
        { test: /\.png$/, loader: 'url?limit=10000&mimetype=image/png'},
        { test: /\.jpg/, loader: 'file?name=[name].[ext]'}

      ],
    },
});

