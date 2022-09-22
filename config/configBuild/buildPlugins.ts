import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { web } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtructPlugin from "mini-css-extract-plugin";
import { json } from "stream/consumers";

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtructPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
};
