module.exports = {
  debug: true,
  // ^ Setting this to true sets "process.env.NODE_ENV" to "development" in processed js, it's set to "production" otherwise
  entry: ['./src/index.js'],
  output: {
    bundlePath: '/dist/bundle.js',
    sourceMap: true,
    sourceMapPath: '/dist/bundle.js.map',
  },
  server: {
    port: 8080,
    hmrPath: '/dist/bundle_hmr',
    bundlePath: '/dist/bundle.js',
    sourceMapPath: '/dist/bundle.js.map',
    redirectNotFoundToIndex: true,
  },
  presets: [
    [
      require.resolve('pundle-preset-default'),
      {
        // Put any preset config here
      }
    ],
    [
      require.resolve('pundle-preset-typescript'),
      {
        transformer: {
          extensions: ['js', 'jsx', 'ts', 'tsx'],
        }
      }
    ],
  ],
}
