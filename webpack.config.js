const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
			Components: path.resolve(__dirname, 'src/components/'),
			Containers: path.resolve(__dirname, 'src/containers/'),
            Pages: path.resolve(__dirname, 'src/pages/'),
			Styles: path.resolve(__dirname, 'src/styles/'),
			Icons: path.resolve(__dirname, 'src/assets/icons/'),
			Logos: path.resolve(__dirname, 'src/assets/logos/'),
            Routes: path.resolve(__dirname, 'src/routes/'),
		}
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
};