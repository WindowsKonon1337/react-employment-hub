import  webpack from 'webpack';
import path from 'path';

import { buildWebpack } from "./config/build/buildWebpack";
import { BuildPaths, BuildMode, BuildPlatfrom } from './config/build/types.ts/types'


interface EnvProps {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatfrom;
}

const webpackConfig =  (env: EnvProps) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: paths,
    platform: env.platform ?? 'desktop',
    isAnalyzerOpen: env.analyzer
  });
  
  return config
};

export default webpackConfig;