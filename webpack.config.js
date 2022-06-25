const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  target: "web",
  mode: "development",
  entry: "./index.tsx",
  devServer: {
    static: "./public",
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    clean: true,
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.ts?x$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Mekho Blogs",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
