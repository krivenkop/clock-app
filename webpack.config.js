const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: process.env.ENVIRONMENT,
  watch: false,
  watchOptions: {
    aggregateTimeout: 300
  },

  entry: './app/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
};
