var gulp = require('gulp');

gulp.task("default", defaultTask);

//////////

function defaultTask(done) {
	gulp.src("src/**/*.js")
		.pipe(gulp.dest("dist"));
}