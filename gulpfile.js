const gulp = require('gulp');

/*  

TOP LEVEL FUNCITONS

gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Points to folder to output
gulp.watch - Watch files and folders for changes

*/


//logs message
gulp.task('message', function(){
	return console.log('Gulp is Running...');
})

//default runs function with naked 'gulp' command in bash
gulp.task('default', function(){
	return console.log('Gulp is Running...');
})