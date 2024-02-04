import path from "path";
import webpack from "webpack";

import { BuildDevServer } from "./buildDevServer";
import { BuildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { BuildResolves } from "./buildResolves";
import { BuildOptions } from "./types.ts/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    const isDev = mode === 'development';


    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        devServer: isDev ? BuildDevServer(options) : undefined,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        devtool: isDev ? 'eval-cheap-source-map' : false,
        module: {
            rules: BuildLoaders(options)
          },
        resolve: BuildResolves(options),
        plugins: buildPlugins(options)
      }
}