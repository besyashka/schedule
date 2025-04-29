const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', // или 'development' для разработки
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // путь к папке dist
    clean: true, // очищает папку dist перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [],
            },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // загрузка CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource', // загрузка изображений
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // очищает папку dist перед сборкой
    new HtmlWebpackPlugin({
        template: './src/index.html', // ваш HTML-шаблон
    }),
],
};