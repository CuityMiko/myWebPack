/**
 * 项目开发配置文件
 */
var path=require('path');

module.exports={
    entry:[ // entry：SPA入口文件
        //浏览器自动刷新
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080', 
        path.resolve(__dirname,'src/js/app.js')
    ], 
    output:{
        path:path.resolve(__dirname,'dist'), //webpack输出文件
        filename:'bundle.js'
    }
}