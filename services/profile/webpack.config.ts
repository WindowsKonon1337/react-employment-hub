import  webpack from 'webpack';
import path from 'path';

import {buildWebpack, BuildPaths, BuildMode, BuildPlatfrom} from '@packages/build-config'

import packageJson from './package.json'




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
    port: env.port ?? 5001,
    mode: env.mode ?? 'development',
    paths: paths,
    platform: env.platform ?? 'desktop',
    isAnalyzerOpen: env.analyzer
  });

  config.plugins?.push(new webpack.container.ModuleFederationPlugin({
    name: 'profile',
    filename: 'remoteEntry.js',
    exposes: {
      './router': './src/router/Router.tsx'
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react']
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom']
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom']
      }
    }
  }))
  
  return config
};

export default webpackConfig;