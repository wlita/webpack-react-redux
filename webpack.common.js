var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: 'index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
    // publicPath: publicPath,
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      {
        //js文件，  babel转换
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, 'node_modules'),
        include: path.join(__dirname, 'src'),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'postcss-loader' ,
            options: {
                plugins: [
                  require('autoprefixer')
                ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 
              'css-loader', 
              { loader: 'postcss-loader' ,
                  options: {
                      plugins: [
                        require('autoprefixer')
                      ]
                  }
                }, 'sass-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 
              'css-loader', 
              { loader: 'postcss-loader' ,
                  options: {
                      plugins: [
                        require('autoprefixer')
                      ]
                  }
              }, 
              'less-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  },

  plugins: [

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['polyfills', 'vendor'].reverse()
    // }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunksSortMode: 'dependency'
    })
  ]
}