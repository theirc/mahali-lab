const gulp        = require('gulp');
const runSequence = require('run-sequence');
const config      = require('../../project.config');

let tasks = [];
Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key] && key != 'browsersync' && key != 'watch') {
    console.log(key);
    tasks.push((key == 'webpack' && config.tasks.watch) ? '_' + key : key);
  }
});


gulp.task('build', function(callback) {
  console.log(tasks);
  // Run all tasks needed for a build in defined order
  runSequence(tasks, callback);
});
