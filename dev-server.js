/**
 * Require Browsersync
 */
var browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync({
    server: {
      baseDir: "src",
      routes: {
          "/node_modules": "node_modules"
      },
    },
    files: "src"
});
