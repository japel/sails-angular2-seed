/**
 * `tasks/config/copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * For more information, see:
 *   http://sailsjs.com/anatomy/tasks/config/copy-js
 *
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    raw: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public/raw'
      }]
    },
    compiled: {
      files: [{
        expand: true,
        cwd: '.tmp/public/raw',
        src: ['**/*.!(ts|d.ts|component.ts)'],
        dest: '.tmp/public/compiled'
      }]
    },
    dependencies: {
      files: [{
        expand: true,
        cwd: './',
        src: require('../pipeline').clientDependencies,
        dest: '.tmp/public/dependencies'
      }]
    },
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // This Grunt plugin is part of the default asset pipeline in Sails,
  // so it's already been automatically loaded for you at this point.
  //
  // Of course, you can always remove this Grunt plugin altogether by
  // deleting this file.  But check this out: you can also use your
  // _own_ custom version of this Grunt plugin.
  //
  // Here's how:
  //
  // 1. Install it as a local dependency of your Sails app:
  //    ```
  //    $ npm install grunt-contrib-copy --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
