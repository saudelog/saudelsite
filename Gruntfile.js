module.exports = function(grunt){
  //load plugins
  [
    'grunt-contrib-jshint',
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

  //configure plugins
  grunt.initConfig({
    jshint:{
      app:['saudel.js'],
      qa:['Gruntfile.js']
    },
  });

  //register tasks
  grunt.registerTask('default',['jshint']);
};
