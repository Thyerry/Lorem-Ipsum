const gulp = require('gulp')
const ts = require('gulp-typescript')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(babel({
            minified: true,
            presets: ["env"]
        }))
        .pipe(concat(`produtos.min.js`))
        .pipe(gulp.dest('build'))
})