const gulp = require('gulp')

gulp.task('default',() => {
    console.log('Okay!')
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log("antes 1")
})

gulp.task('antes2', () => {
    console.log("antes 2")
})

gulp.task('fim', () => {
    console.log("fim")
})