const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cMapsDir = path.join(
  path.dirname(require.resolve('pdfjs-dist/package.json')),
  'cmaps'
)

const standardFontsDir = path.join(
  path.dirname(require.resolve('pdfjs-dist/package.json')),
  'standard_fonts'
)
const config = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'main.js',
    },
    devServer: {
      static: path.resolve(__dirname, 'public'),
      compress: true,
      port: 4000,
      historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    stats: {
      errorDetails: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: './sample.pdf' },
          { from: cMapsDir, to: 'cmaps/' },
          { from: standardFontsDir, to: 'standard_fonts/' },
        ],
      }),
      // new HtmlWebpackPlugin({ template: 'index.html' }),
    ],
  }
}

module.exports = config
