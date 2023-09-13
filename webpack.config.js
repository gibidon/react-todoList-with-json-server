const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const conf = {
	mode: "development",
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].js",
	},
	devServer: {
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			{
				test: /\.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},

			{
				test: /\.(jpg|jpeg|png|svg)/,
				use: ["file-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.m?jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"],
					},
				},
			},
			{ test: /\.(ttf)$|woff|woff2|eot/, use: ["file-loader"] },
		],
	},
}

module.exports = conf
