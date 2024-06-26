const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        new: path.resolve(__dirname, 'src/new.html'),
        practice: path.resolve(__dirname, 'src/practice.html'),
        rehearsals: path.resolve(__dirname, 'src/rehearsals.html'),
      },
    },
  },
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