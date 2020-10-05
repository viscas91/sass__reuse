const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./sass/app.scss'],
  output: {
    filename: '[name].css',
  },
  module: {
  	rules: [
  		{
  			test: /\.scss$/,
  			use: [
  				{
  					loader: 'file-loader',
  					options: {
  						name: 'bundle.css',
  					}
  				},
  				{loader: 'extract-loader'},
  				{loader: 'css-loader?url=false'},
  				{
  					loader: 'postcss-loader',
  					options: {
              postcssOptions: {
  						  plugins: () => [autoprefixer()]
              }
  					}
  				},
  				{
  					loader: 'sass-loader',
  					options: {
  						implementation: require('sass'),
  						webpackImporter: false,
  						sassOptions: {
  							includePaths: ['./node_modules'],
  						}
  					}
  				}
  			],
  		},
  		// {
  		// 	test: /\.js$/,
  		// 	loader: 'babel-loader',
  		// 	query: {
  		// 		presets: ['@babel/preset-env']
  		// 	}
  		// }
  	],
  },
};