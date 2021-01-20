//1.导入所需模块
let {src,dest,watch} = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let babel = require('gulp-babel');
let imagemin = require('gulp-imagemin');
let htmlmin = require('gulp-htmlmin');
//2.发布并导出任务
//复制首页
function fnCopyIndex(){
    return src('./src/index.html')
    .pipe(dest('./dist'));
}
//html
function fnHtml(){
    return src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/pages'));
}
//css
function fnSass(){
    return src('./src/sass/*.scss')
    .pipe(sass({outputStyle : 'expanded'}))
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/css'));
}
//js
function fnJS(){
    return src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/js'));
}
//img
function fnImg(){
    return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'))
}
//监听
function fnWatch(){
    watch('./src/index.html',fnCopyIndex);
    watch('./src/pages/*.html',fnHtml);
    watch('./src/sass/*.scss',fnSass);
    watch('./src/js/*.js',fnJS);
}
//3.导出模块
exports.copyIndex = fnCopyIndex;
exports.html = fnHtml;
exports.sass = fnSass;
exports.js = fnJS;
exports.img = fnImg;
exports.default = fnWatch;