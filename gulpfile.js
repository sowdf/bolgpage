/**
 * Created by 4399-1126 on 2016/3/4.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
gulp.task('sass', function () {
    gulp.src('./source/sass/*.scss')
        .pipe(compass({
            //config_file: './resource/config.rb',
            css: './resource/stylesheets',
            sass: './resource/sass/'
        }))
        .on('error',function(){
            console.log('error');
        })
        //.pipe(gulp.dest('./build/css/'));
});