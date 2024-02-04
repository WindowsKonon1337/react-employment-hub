import { ModuleOptions } from "webpack";
import ReactRefreshTypeScript  from 'react-refresh-typescript'

import { BuildOptions } from "./types.ts/types";

export function BuildLoaders({mode}: BuildOptions) {
    const loaders: ModuleOptions['rules'] = []

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
    };

    const swcLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
        },
      };

    const imgLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }

    if(mode === 'production') {
        loaders.push(swcLoader)
    }

    if(mode === 'development') {
        loaders.push(babelLoader)
    }

    loaders.push(imgLoader, fontsLoader, svgLoader)

    return loaders
}