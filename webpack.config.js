const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
		new HtmlWebpackPlugin({
		  filename: "index.html", // Arquivo de saída em nossa pasta dist
		  template: path.resolve(__dirname, "./src/index.html"), // Nosso arquivo HTML do projeto
		}),
		new MiniCssExtractPlugin({
		  filename: "css/[name].css", // Arquivo de saída em nossa pasta dist
		}),
	],
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: [MiniCssExtractPlugin.loader, "css-loader"],
		  },
		],
	}
};