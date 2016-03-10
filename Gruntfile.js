module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      all: {
        files: ['*.php', '*.html'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['js/*.js'],
        tasks: [],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },
    sass: {
      dist: {
        options: {
          compass: true,
          style: 'compressed'
        },
        files: {
          'css/style.css': 'scss/style.scss',
        }
      }
    },
  });
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['watch']);
};
