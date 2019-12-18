module.exports = function(grunt) {
    grunt.initConfig({
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'sass',
            cssDir: 'css',
            environment: 'production'
          }
        },
      },
      watch: {
        options: {
          livereload: true,
        },
        css: {
          files: ['sass/*.scss'],
          tasks: ['compass'],
        },
      },
      uglify: {
        my_target: {
          files: {
            'public/output.js': ['src/index.js']
          }
        }
      },
    });
    //grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    [
      'grunt-contrib-compass',
      'grunt-contrib-watch',
      'grunt-contrib-uglify'
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['compass']);
  };
  
  