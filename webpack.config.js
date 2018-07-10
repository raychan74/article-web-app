const path = require('path');
// const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true
	},
	mode: 'development',
	module: {
		rules: [
			{
				exclude: path.resolve(__dirname, 'node_modules'),
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react', 'flow'],
							plugins: [
								'transform-class-properties',
								'transform-object-rest-spread',
								'transform-runtime'
							]
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	// plugins: [
	// 	new Dotenv()
	// ],
	devtool: 'cheap-module-source-map',
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
