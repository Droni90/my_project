import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/configBuild/buildWebpackConfig';
import {
  BuildEnv,
  BuildMode,
  BuildPaths,
} from './config/configBuild/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode: BuildMode = env?.mode || 'development';

  const isDev: boolean = mode === 'development';
  const PORT: number = env?.port || 3005;
  const apiUrl = env?.apiUrl || 'http://localhost:8000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });
  return config;
};
