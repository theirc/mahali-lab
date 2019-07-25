const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/assets/js/video_src.js',
  output: {
    filename: 'video.js',
    path: path.resolve(__dirname, 'src/assets/js')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};