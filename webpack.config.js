let path = require('path')

let conf = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: '/dist/'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '.')
		},
		client: {
			overlay: true
		},
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: () => [
									require('autoprefixer')
								]
							}
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
}

module.exports = (env, options) => {
	let isProduction = options.mode === 'production';

	conf.devtool = isProduction
		? 'source-map' // set "false" if you want to disable sourcemap on production
		: 'eval-cheap-module-source-map';

	return conf;
};