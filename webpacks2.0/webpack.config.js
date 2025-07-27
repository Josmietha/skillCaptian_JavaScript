const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean dist folder
  },
  mode: 'development', // Development mode
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // CSS loaders
      },
      {
        test: /\.m?js$/,  // JS files (including ES6 modules)
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS using Babel
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Use if you create your own HTML template, otherwise omit
      title: 'Webpack Dev Server Demo',
    }),
  ],
  devServer: {
    static: './dist', // Serve files from dist folder
    open: true, // Open browser automatically
    hot: true, // Enable hot module replacement
    port: 3000, // Port number
  },
};