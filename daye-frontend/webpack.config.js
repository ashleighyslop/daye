const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
// const Dotenv = require("dotenv-webpack");

const config = () => {

  return {
    entry: ["react-hot-loader/patch", "./src/App.js"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        { test: /\.(png|jpg|jpeg|svg|ico)$/, use: "file-loader" }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "react-dom": "@hot-loader/react-dom"
      }
    },
    devServer: {
      contentBase: "./dist"
    },
  };
};

module.exports = config;
