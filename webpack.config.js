const path = require('path');

module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    path:path.resolve(__dirname, "bundle"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
    ]
  }
}