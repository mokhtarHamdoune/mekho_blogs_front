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
    historyApiFallback: true, //fallback to index.html
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]",
    publicPath: "/", //tell html to always access main.js from / folder
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      pages: path.resolve(__dirname, "src/pages/"),
      components: path.resolve(__dirname, "src/components/"),
      images: path.resolve(__dirname, "src/images/"),
      utils: path.resolve(__dirname, "src/utils/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Mekho Blogs",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({}),
  ],
};
