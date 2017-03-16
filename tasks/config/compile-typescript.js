/**
 * `tasks/config/compile-typescript`
 *
 * ---------------------------------------------------------------
 *
 * Compile all the TypeScript files in the assets folder into JS files.
 */
module.exports = function(grunt) {

  grunt.config.set('ts', {
    default : {
      src: [".tmp/public/raw/**/*.ts"],
      options: {
        "declaration": false,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "mapRoot": "/",
        "module": "commonjs",
        "moduleResolution": "node",
        "noEmitOnError": true,
        "noImplicitAny": false,
        "outDir": "../.tmp/public/raw/",
        "rootDir": ".",
        "sourceMap": true,
        "target": "es6",
        "inlineSources": true
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
};
