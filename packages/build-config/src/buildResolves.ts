import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function BuildResolves({paths}: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': paths.src,
            'public': paths.public
        }
    }
}