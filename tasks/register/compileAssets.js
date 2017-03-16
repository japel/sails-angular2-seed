/**
 * `tasks/register/compileAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   http://sailsjs.com/anatomy/tasks/register/compile-assets-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('compileAssets', [
    'clean',
    'copy:raw',
    'ts',
    'copy:compiled',
    'copy:dependencies'
  ]);
};
