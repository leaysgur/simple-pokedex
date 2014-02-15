module.exports = function(grunt) {

  grunt.initConfig({
    jst: {
      compile: {
        options: {
          processName: function(path) {
            return path.split('/').pop().split('.html').shift();
          }
        },
        files: {
          './script/app/tmpl/templates.js': ['./tmpl/*.html']
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: './script/app',
          mainConfigFile: './script/app/require_config.js',
          name: 'main',
          out: './script/build/main.js'
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: './config.rb'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['jst', 'requirejs', 'compass']);

};