const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname, 'src'),

	mode: 'development',

	entry: {
		main: './scripts/index.js'
	},

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	resolve: {
		extensions: ['.js', '.json', '.png', 'sass', 'css'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},

	devServer: {
		port: 4000
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
		}),
		new CleanWebpackPlugin()
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.sass$/,
				use: ['style-loader','css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				use: ['file-loader']
			}
		]
	}
}