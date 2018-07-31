const path = require('path');

var distOutput = {
  output: {
    filename: 'basic-custom-map.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'basicCustomMap',
    umdNamedDefine: true,
  }
}

var demoOutput = {
  output: {
    filename: 'basic-custom-map.min.js',
    path: path.resolve(__dirname, 'demo/lib/'),
    libraryTarget: 'umd',
    library: 'basicCustomMap',
    umdNamedDefine: true,
  }
}

var basicConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: require.resolve('snapsvg/dist/snap.svg.js'),
        use: 'imports-loader?this=>window,fix=>module.exports=0'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias:{
      snapsvg: 'snapsvg/dist/snap.svg.js'
    }
  },
  devtool: 'source-map',
  mode: 'production'
};

var distConfig = Object.assign(basicConfig, distOutput);
var demoConfig = Object.assign(basicConfig, demoOutput);

console.log()


module.exports = [
  distConfig, demoConfig
];
