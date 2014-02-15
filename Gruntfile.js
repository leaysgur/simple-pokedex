module.exports = function(grunt) {

  // Project configuration.
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
    uglify: {
      build: {
        src: 'src/*.js',
        dest: 'dest/all.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jst');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['jst']);

};
