const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'basic-custom-map.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'basicCustomMap',
    umdNamedDefine: true,
  },
  mode: 'production'
};
