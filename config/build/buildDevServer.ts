import path from 'path'
import {Configuration} from 'webpack-dev-server'
import { BuildOptions } from './types.ts/types'

export function BuildDevServer(options: BuildOptions): Configuration {
    return {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: options.port ?? 5000,
    }
}