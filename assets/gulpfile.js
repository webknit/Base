var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cssGlobbing = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var autoprefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');
var svgSymbols = require('gulp-svg-symbols');
var browserify = require('browserify');
var babelify = require('babelify');

var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream'); 

var paths = {
	assets: {
		js: 'js/',
		css: 'SASS/',
		html: '../site/'
	},
	output: {
		js: '../site/scripts/',
		css: '../site/css/',
		img: '../site/img/'
	}
};

// If you are running the site with a different webserver change this to the URL of the site e.g. localhost:8888
var proxy = '';

gulp.task('sprites', function() {
	return gulp.src(paths.output.img + '*.svg').pipe(svgSymbols({
		templates: ['default-svg'],
		svgClassname: 'svg-icon-lib'
	})).pipe(gulp.dest(paths.output.img + '/svgsprite/'));
});

gulp.task('styles:dev', function () {
	gulp.src(paths.assets.css + '**/*.scss')
		.pipe(cssGlobbing())
		.pipe(sourcemaps.init())
			.pipe(sass({
				outputStyle: 'expanded'
			}))
			.on('error', notify.onError())
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefix({
				browsers: ['last 2 version', 'ie 9']
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.output.css))
		.pipe(browserSync.stream())
		.pipe(notify({
			title: 'Noah',
			message: 'Styles task complete.'
		}));
});

gulp.task('styles:deploy', function () {
	gulp.src('./sass/**/*.scss')
		.pipe(cssGlobbing({
			extensions: ['.css', '.scss']
		}))
		.pipe(sourcemaps.init())
			.pipe(sass({
				outputStyle: 'expanded'
			}))
			.on('error', notify.onError())
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefix({
				browsers: ['last 2 version', 'ie 9']
			}))
		.pipe(sourcemaps.write())
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(paths.output.css))
		.pipe(browserSync.stream())
		.pipe(notify({
			title: 'Noah',
			message: 'Styles deployment task complete.'
		}));
});

gulp.task('scripts:lint', function() {
	return gulp.src([paths.assets.js + 'script.js', paths.assets.js + '**/*.js'])
		.pipe(jshint())
    	.pipe(jshint.reporter('jshint-stylish'))
    	.pipe(notify(function (file) {
		    if (file.jshint.success) {
		    	// Don't show something if success
		    	return false;
		    }

		    var errors = file.jshint.results.map(function (data) {
		    	if (data.error) {
		    		return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
		    	}
		    }).join("\n");
		    return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
		}));
});

gulp.task('scripts:bundle', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: paths.assets.js + 'script.js',
    debug: true
  });

  return b.transform(babelify, { presets: ['env'], plugins: [] })
  	.bundle()
  	.on('error', function(e) {
      console.error(e.message);
      this.emit('end');
    })
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .on('error', function(e) {notify({
			title: 'Noah',
			message: e.message
		})})
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.output.js));
});

gulp.task('scripts:deploy', function() {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: paths.assets.js + 'script.js'
  });

  return b.transform(babelify, { presets: ['env'], plugins: [] })
  	.bundle()
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(paths.output.js));
});

gulp.task('templates', function() {
	return browserSync.reload();
});

gulp.task('images', function() {
  return gulp.src(paths.output.img + '**/*')
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.output.img))
    .pipe(notify({
		title: 'Noah',
		message: 'Images task complete.'
	}));
});

gulp.task('default', ['scripts:lint', 'scripts:bundle', 'styles:dev', 'sprites'], function () {
	var settings = {};
	if(proxy !== '') {
		settings.proxy = proxy;
	} else {
		settings.server = paths.assets.html;
	}
	browserSync.init([paths.output.js + '**/*.js'], settings);

	// Watch Img folder for SVGs
    gulp.watch(paths.output.img + '*.svg', ['sprites']);
	// Watch .js files
	gulp.watch(paths.assets.js + '**/*.js', ['scripts:lint', 'scripts:bundle']);
	// Watch .scss files
	gulp.watch(paths.assets.css + '/**/*.scss', ['styles:dev']);
	// Watch .html files
	gulp.watch([paths.assets.html + 'Views/*.{php,html,cshtml}', paths.assets.html + 'index.{php,html,cshtml}'], ['templates']);

});

gulp.task('deploy', ['scripts:lint', 'scripts:deploy', 'styles:deploy', 'sprites']);