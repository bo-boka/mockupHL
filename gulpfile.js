const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
var webserver = require('gulp-webserver');

/*  

TOP LEVEL FUNCITONS

gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Points to folder to output
gulp.watch - Watch files and folders for changes

*/

//webserver
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

//logs message
gulp.task('message', function(){
	return console.log('Gulp is Running...');
});

//copy index.html to dist
gulp.task('copyIndex', function(){
	gulp.src('*.html')
	.pipe(gulp.dest('dist'));
});

//copy html pages to dist
gulp.task('copyHtml', function(){
	gulp.src('pages/*.html')
	.pipe(gulp.dest('dist'));
});

//optimaize images
gulp.task('imageMin', () =>
	gulp.src('images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

//minify js 
//(not being executed; concat function below instead)
gulp.task('minify', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

//compile sassgul
gulp.task('sass', function(){
	gulp.src('sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
});

//concatenate js files and minifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(concat('main.js'))
	.pipe(uglify()) //minifies after concat
	.pipe(gulp.dest('dist/js'));
});

//default runs function with naked 'gulp' command in bash
//will run all functions
gulp.task('default', ['message', 'copyIndex', 'copyHtml', 
	'imageMin', 'sass', 'scripts', 'watch', 'clean']);


//watch files for changes and automatically runs tasks
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('images/*', ['imageMin']);
	gulp.watch('sass/*.scss', ['sass']);
	gulp.watch('*.html', ['copyIndex']);
	gulp.watch('pages/*.html', ['copyHtml']);

});

//clean 
gulp.task('clean', function () {
    return gulp.src('app/tmp/index.js')
        .pipe(clean({force: true}))
        .pipe(gulp.dest('dist'));
});

/*
//angular
gulp.task('indexhtml', function () {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'styles/site-svcc-relative.min.css',
            'js': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js',
                'main.min.js']
        }))
        .pipe(gulp.dest('dist/'));

    gulp.src('index.html')Doe
        .pipe(htmlreplace({
            'css': 'styles/site-svcc-relative.css',
            'js': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.js',
                'main.js']
        }))
        .pipe(rename('index-nomin.html'))
        .pipe(gulp.dest('dist/'));
});
*/


/*
//run app locally from heroku
gulp.task('serveprod', function() {
  connect.server({
    root: C:\Users\bokas\Documents\_repos\mockupHL,
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});*/