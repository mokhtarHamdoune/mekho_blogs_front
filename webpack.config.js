const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [
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
  ],
};
