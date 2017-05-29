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
    },
    module: { //加载器
        loaders: [
            //处理jsx语法和es6语法
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react']
                }
            },
            //处理在js中引用css
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // 如果有多个加载器，中间用!隔开，多个加载器的执行顺序是从右往左去执行
            },
            //处理在js引用sess
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            //处理在js中引用图片
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            },
            //处理字体文件
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ]
    }
}