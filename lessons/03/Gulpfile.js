var gulp = require('gulp');

gulp.task("default", defaultTask);

//////////

function defaultTask(done) {
	gulp.src("src/")
		.pipe(gulp.dest("dist"));
}