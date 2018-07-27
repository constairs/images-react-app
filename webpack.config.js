var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: './src/index',
	mode: 'development',
	// mode: 'production',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		port: 9000,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					// MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
		plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new UglifyJsPlugin({
			test: /\.js($|\?)/i,
			sourceMap: true
		}),
		new CleanWebpackPlugin('dist', {}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: false,
			// hash: true
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	]
}