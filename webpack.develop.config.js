/**
 * 项目开发配置文件
 */
var path=require('path');

module.exports={
    entry:path.resolve(__dirname,'src/js/app.js'), // entry：SPA入口文件
    output:{
        path:path.resolve(__dirname,'dist'), //webpack输出文件
        filename:'bundle.js'
    }
}