var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var concat = require('gulp-concat');


// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under MIT License\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css .Note that creative.less imports the other
// 2 files. 
gulp.task('less', function() {
    return gulp.src('less/creative.less')
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('copy-css',['less'],function(){
    
   return gulp.src([
            'node_modules/font-awesome/fonts/*',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(
             gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css',
              'node_modules/font-awesome/css/font-awesome.css',
            'node_modules/magnific-popup/dist/magnific-popup.css',
        ])
            .pipe(gulp.dest('css'))
            .pipe(browserSync.reload({
                stream: true
            }))
        )    
})

// Minify and concat compiled CSS
gulp.task('minify-css', ['copy-css'], function() {
    return gulp.src(['css/*.css','!css/*.min.css'])
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat('portfolio.min.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy vendor libraries from /node_modules into
gulp.task('concat-js',['minify-js'], function() {
    return gulp.src([  './node_modules/jquery/dist/jquery.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js',
                './js/easing.min.js',
                './node_modules/scrollreveal/dist/scrollreveal.min.js',
                './js/creative.min.js',
                './js/jqBootstrapValidation.min.js',
                './js/contact_me.min.js'
            ])
    .pipe(concat('portfolio.min.js'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('./dist/js'))
})

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src(['js/creative.js','js/easing.js','js/jqBootstrapValidation.js','js/contact_me.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Run everything
gulp.task('default', ['minify-css', 'concat-js']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: "index.html"
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'minify-css', 'concat-js'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['concat-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
});