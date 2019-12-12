const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
  context: path.resolve(__dirname, '.'),
  // set the entry point of the application
  // can use multiple entry
  entry: {
    slider: './src/main/webapp/vue-app/slider/main.js',
    news: './src/main/webapp/vue-app/news/main.js',
    profileStats: './src/main/webapp/vue-app/profileStats/main.js',
    wallet: './src/main/webapp/vue-app/wallet/main.js',
    perkstore: './src/main/webapp/vue-app/perkstore/main.js',
    tasks: './src/main/webapp/vue-app/tasks/main.js',
    events: './src/main/webapp/vue-app/events/main.js',
    sharedDocuments: './src/main/webapp/vue-app/sharedDocuments/main.js',
    recentDocuments: './src/main/webapp/vue-app/recentDocuments/main.js',
    favoriteDocuments: './src/main/webapp/vue-app/favoriteDocuments/main.js',
    leftNavigation: './src/main/webapp/vue-app/sidebar/leftNavigation/main.js',
    spacesNavigation: './src/main/webapp/vue-app/sidebar/spacesNavigation/main.js',
    dwAdministration: './src/main/webapp/vue-app/sidebar/administration/main.js',
    mySettings: './src/main/webapp/vue-app/sidebar/mySettings/main.js',
    notification: './src/main/webapp/vue-app/topBar/notification/main.js',
    topBottomNavigation: './src/main/webapp/vue-app/topBar/topBottomNavigation/main.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  externals: {
    vue: 'Vue',
    vuetify: 'Vuetify',
  },
  plugins: [
    // we use ExtractTextWebpackPlugin to extract the css code on a css file
    new ExtractTextWebpackPlugin('css/main.css')
  ]
};

module.exports = config;