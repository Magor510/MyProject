module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.txt$/i,
				use: 'raw-loader',
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},	
		],
		loaders: [
			{
		  		test: /\.json$/,
				loader: 'json-loader'
			}
	  	]
	},
	output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }
};