let webpack = require('webpack');
let envFile = require('node-env-file');

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
}
catch(e) {

}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
          warnings: false
      }
    }),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'API_KEY': JSON.stringify(process.env.API_KEY || 'AIzaSyBle3dphpOAf3FikJ9nDW4quiV6Ad0XPxk'),
      'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN || 'todos-b5d20.firebaseapp.com'),
      'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL || 'https://todos-b5d20.firebaseio.com'),
      'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET || 'todos-b5d20.appspot.com')
    }
  })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? null : 'cheap-module-eval-source-map'
};
