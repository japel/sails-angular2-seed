/**
 * `tasks/config/sync`
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
 * For more information, see:
 *   http://sailsjs.com/anatomy/tasks/config/sync-js
 *
 */
module.exports = function(grunt) {

  grunt.config.set('sync', {
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
        cwd: 'node_modules',
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
  //    $ npm install grunt-sync --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-sync');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
