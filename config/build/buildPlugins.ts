import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { Configuration, DefinePlugin } from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

import { BuildOptions } from "./types.ts/types";
import path from "path";



export function buildPlugins({paths, mode, isAnalyzerOpen, platform}: BuildOptions) {
    

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'faicon.png') }),
        new DefinePlugin({
            __PLATFROM__: JSON.stringify(platform)
        }),
    ]

    if(mode === 'development') {
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin());

    }

    // на случай использования файлов
    // if(mode === 'production') {
    //     plugins.push(new CopyPlugin({
    //         patterns: [
    //           { from: path.resolve(paths.public, 'locales'), to: paths.output },
    //         ],
    //       }))
    // }

    if(isAnalyzerOpen) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    

    return plugins
}