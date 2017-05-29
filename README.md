## bower用来管理web前端的第三方依赖库
+ 安装bower `cnpm install bower --save-dev`
+ 在项目根目录下创建.bowerrc文件用来指定bower install文件的输出目录
+ .bowerrc文件：
    ```
    {
        "directory": "src/lib"
    }
    ```
## webpack快速开始
* 全局安装webpack `npm install webpack -g`
* 本地安装webpack `npm install webpack --save-dev`
* 启动webpack `webpack --config webpack.develop.config.js`
## webpack快速入门
+ 将webpack命令放入npm的package.json的scripts内 执行 npm run develop即可
+ 安装webpack-dev-server : cnpm install webpack-dev-server --save-dev
## webpack-dev-server插件
+ 这个模块封装了webpack和express
+ 所有webpack里面的配置选项，webpack-dev-server都可以使用并且还可以启动本地服务
+ webpack-dev-server --config webpack.develop.config.js --devtool eval --progress --colors --hot --content-base src
+ --content-base src:以src目录作为根目录启动一个http服务器
+ 