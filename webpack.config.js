module.exports = {
  entry: './src/App.js',
  output: {
    path: __dirname,
    filename: 'quizscraper.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env','es2015','react'],
        plugins: ['babel-plugin-react-html-attrs']
      }
    }]
  }
};
