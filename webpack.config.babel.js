import webpack from 'webpack';
import path from 'path';

const config = {
  entry: './client/src/flashBack',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
    // jsx
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client/src'),
        exclude: /node_modules/
      },
      // CSS
      { 
        test: /\.(scss|css|styl)$/, 
        include: path.join(__dirname, 'client/src/styles'),
        loader: 'style-loader!css-loader!stylus-loader!sass-loader'
      }
    ]
  }
};

export default config;
