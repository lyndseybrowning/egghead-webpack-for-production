import { resolve } from 'path';

export default (env) => {
  return {
    entry: './js/index.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.production
    },
    // base directory for resolving entry option
    context: resolve(__dirname, 'src'),
    devtool: env.production ? 'source-map' : 'eval',
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
      ],
    },
    devServer: {
      contentBase: resolve(__dirname, 'src'),
    },
  };
};
