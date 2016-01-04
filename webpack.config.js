var path = require("path");

module.exports = {
  entry: {
    tada: path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: "/dist/",
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader",
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      }
    ],
  },
  devtool: "source-map"
};