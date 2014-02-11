module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    handlebars: {
      dist: {
        options: {
          namespace: "JST",
          wrapped: "true"
        },
        files: {
          "templates.js": [
            "./fileA.tmpl",
            "./fileB.tmpl"
          ]
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask("default", ['handlebars']);

};