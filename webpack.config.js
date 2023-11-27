const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); //for Ace Editor

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),

    //To ensure that Ace Editor assets are available at runtime, we need to manually copy them from the node_modules/ace-builds/src-noconflict directory to the output directory where the built application resides
    new CopyWebpackPlugin({
      patterns: [
        // copy Ace Editor's worker scripts from node_modules to the output dist folder  /dist/ace
        { from: 'node_modules/ace-builds/src-noconflict', to: 'ace' },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
