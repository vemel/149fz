const path = require('path')
const OfflinePlugin = require('offline-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = options => ({
  entry: 'src/index.js',
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  webpack(config) {
    // inject offline-plugin in production build
    if (!options.dev) {
      config.output.publicPath = '';
      config.output.path = path.resolve(__dirname, 'docs');

      config.plugins.push(new WebpackCleanupPlugin())
      config.plugins.push(new OfflinePlugin({
        ServiceWorker: {
          events: true
        }
      }))
    }

    return config
  }
})
