const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  assetsInclude: ['**/*.mp3'],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~plyr': path.resolve(__dirname, 'node_modules/plyr'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}