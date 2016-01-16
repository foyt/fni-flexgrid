module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/flexgrid.css': 'scss/flexgrid.scss',
          'css/flexgrid-ie.css': 'scss/flexgrid-ie.scss'
        }
      },
      options: {
        includePaths: [
          './node_modules/compass-mixins/lib'
        ],
        sourceMap: false,
        outputStyle: 'compressed'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};