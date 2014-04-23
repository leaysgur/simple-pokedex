module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jst: {
      compile: {
        options: {
          processName: function(path) {
            return path.split('/').pop().split('.html').shift();
          }
        },
        files: {
          './script/pokedex/templates.js': ['./tmpl/*.html']
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: './script/pokedex',
          name: 'main',
          mainConfigFile: './script/pokedex/main.js',
          out: './build/js/pokedex.min.js'
        }
      }
    },
    uglify: {
      dist: {
        src: ['./script/vendor/require.js', './build/js/pokedex.min.js'],
        dest: './build/js/pokedex.all.min.js'
      },
      options: {
        warnings: true,
        compress: {
          drop_console: true
        },
        report: 'min'
      }
    },
    compass: {
      dist: {
        options: {
          config: './config.rb'
        }
      }
    },
    esteWatch: {
      options: {
        dirs: ['./', './tmpl/', './style/'],
        livereload: {
          enabled: false
        }
      },
      'scss': function() { return 'compass'; },
      'html': function() { return 'jst'; }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-este-watch');

  grunt.registerTask('build', ['jst', 'requirejs', 'uglify', 'compass']);
  grunt.registerTask('watch', ['esteWatch']);
};
