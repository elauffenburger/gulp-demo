var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del = require('del'),
	requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task("default", defaultTask);
gulp.task("clean", cleanTask);
gulp.task("minify", minifyTask);
gulp.task("optimize", optimizeTask);
gulp.task("optimize-minify", ["optimize"], optimizeAndMinifyTask);

//////////

function cleanTask(done) {
	del([
		"dist/**/*"
	]);	
}

function optimizeAndMinifyTask(done) {
	gulp.src("dist/build/*.js")
		.pipe(uglify())
		.pipe(rename("main.min.js"))
		.pipe(gulp.dest("dist/build"))
		.on("end", function () {
		done();
	});
}

function getRequireOptions() {
	return {
		paths: {
			"$": "../../../bower_components/jquery/dist/jquery.min",
			"lodash": "../../../bower_components/lodash/lodash.min",
			"underscore": "../../../bower_components/underscore/underscore-min"
		},
		map: {
			"*": {
				"_": "lodash"
			}
		},
		optimize: "none",
		include: [
			"main",
			"extra"
		]
	};
}

function optimizeTask(done) {
	gulp.src("src/**/*.js")
		.pipe(requirejsOptimize(getRequireOptions()))
		.pipe(rename("main.js"))
		.pipe(gulp.dest("dist/build"))
		.on("end", function () {
		done();
	});
}

function minifyTask(done) {
	gulp.src("src/**/*.js")
		.pipe(uglify())
		.pipe(rename(function (file) {
			file.extname = ".min.js";
		}))
		.pipe(gulp.dest("dist"))
		.on("end", function () {
		done();
	});
}

function defaultTask(done) {
	gulp.src("src/**/*.js")
		.pipe(gulp.dest("dist"))
		.on("end", function () {
		done();
	});
}