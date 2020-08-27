//1 导入gulp 第三方模块
const gulp=require('gulp');
//2导入gulp-cssmin这个第三方模块
const cssmin=require("gulp-cssmin");
const autoprefixer=require('gulp-autoprefixer')
const uglify=require('gulp-uglify');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
//压缩css
const cssHandler=()=>{
    return gulp.src('./Gree/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
//压缩js
const jsHandler=()=>{
 return gulp.src('./Gree/js/*.js')
 .pipe(babel({
     presets:['@babel/env']
 }))
 .pipe(uglify())//压缩
 .pipe(gulp.dest('./dist/js'))
}

const jsHandler1=()=>{
    return gulp.src('./Gree/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())//压缩
    .pipe(gulp.dest('./dist'))
   }
//打包html
const htmlHandler=()=>{
    return gulp.src(['./Gree/*.html','./Gree/*.htm'])
    .pipe(htmlmin({
            "removeAttributeQuotes":true,   //移除属性上的双引号
            "removeComments":true,    //移除注释
            "collapseBooleanAttributes":true,  //把值为布尔值的属性简写
            "collapseWhitespace":true, //移除所有空格,变成一行代码
            "minifyCSS":true, //把页面里面的style标签里面的css样式也去空格
            "minifyJS":true,  //把页面里面的script标签里面的js代码也去空格
        }
      
    ))
    .pipe(gulp.dest('./dist'))
}
// const htmlHandler = ()=>{
//     return gulp.src(['./Gree/*.html','./Gree/*.htm'])   //找到src目录里面下的pages目录下的所有后缀为.html的文件
//     .pipe(htmlmin({
//         "removeAttributeQuotes":true,   //移除属性上的双引号
//         "removeComments":true,    //移除注释
//         "collapseBooleanAttributes":true,  //把值为布尔值的属性简写
//         "collapseWhitespace":true, //移除所有空格,变成一行代码
//         "minifyCSS":true, //把页面里面的style标签里面的css样式也去空格
//         "minifyJS":true,  //把页面里面的script标签里面的js代码也去空格
//     })) //压缩
//     .pipe(gulp.dest('./dist'))  //把压缩完毕的放到一个指定目录
// }

//移动图片
const imgHandler=()=>{
    return gulp.src("./Gree/images/**")
    .pipe(gulp.dest("./dist/images"))
}
const imgHandler1=()=>{
    return gulp.src("./Gree/imges/**")
    .pipe(gulp.dest("./dist/imges"))
}
const imgHandler2=()=>{
    return gulp.src("./Gree/xaingqingye-images/**")
    .pipe(gulp.dest("./dist/xaingqingye-images"))
}
//移动文件夹
const libHandler = ()=>{
    return gulp.src('./Gree/bottstrap框架插件/**')  //lib文件夹下的所有文档
    .pipe(gulp.dest('./dist/bottstrap框架插件'))   //放到指定的目录就可以了
}
const libHandler1 = ()=>{
    return gulp.src('./Gree/data/**')  //lib文件夹下的所有文档
    .pipe(gulp.dest('./dist/data'))   //放到指定的目录就可以了
}
const libHandler2 = ()=>{
    return gulp.src('./Gree/icon/**')  //lib文件夹下的所有文档
    .pipe(gulp.dest('./dist/icon'))   //放到指定的目录就可以了
}
const libHandler3 = ()=>{
    return gulp.src('./Gree/interface/**')  //lib文件夹下的所有文档
    .pipe(gulp.dest('./dist/interface'))   //放到指定的目录就可以了
}
const libHandler4 = ()=>{
    return gulp.src('./Gree/php/**')  //lib文件夹下的所有文档
    .pipe(gulp.dest('./dist/php'))   //放到指定的目录就可以了
}
const libHandler5 = ()=>{
    return gulp.src('./Gree/sass/**')  //lib文件夹下的所有文档
    .pipe(gulp.dest('./dist/sass'))   //放到指定的目录就可以了
}

//导出
module.exports.css=cssHandler;
module.exports.js=jsHandler;
module.exports.js1=jsHandler1;
module.exports.html=htmlHandler;
module.exports.img=imgHandler;
module.exports.img1=imgHandler1;
module.exports.img2=imgHandler2;
module.exports.lib=libHandler;
module.exports.lib1=libHandler1;
module.exports.lib2=libHandler2;
module.exports.lib3=libHandler3;
module.exports.lib4=libHandler4;
module.exports.lib5=libHandler5;