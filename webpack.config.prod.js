const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
//打包之前，删除dist目录
var CleanWebpackPlugin = require('clean-webpack-plugin')
//从bundle.js中抽离css
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
        "axios":['axios'],
        "quanjiatong":['vue','vue-router','vuex'],
        "jquery":['jquery'],
        "moment":['moment'],
        "v-distpicker":['v-distpicker'],
        "vue-lazyload":['vue-lazyload'],
        "bundle":'./src/main.js' //别忘记了我们自己的业务代码
    },//多入口配置
    output:{//生产阶段，必须要设置它
        path:path.resolve(__dirname,"dist"),
        filename:'js/[name]-[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader:'css-loader',
                        options:{
                            minimize: true, //在抽取css的时候同时进行压缩
                            publicPath:'dist/css'
                        }
                    }
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,//打包的阀值，如果我们的资源小于阀值，就会打包进入bundle.js，如果静态资源超过阀值，单独提取出来，不打包进入bundle.js，阀值根据公司的需要来设置
                            name:'statics/imgs/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,//打包的阀值，如果我们的资源小于阀值，就会打包进入bundle.js，如果静态资源超过阀值，单独提取出来，不打包进入bundle.js，阀值根据公司的需要来设置
                            name:'statics/fonts/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, //排除node_modules里面文件，一定要加上
                loader: "babel-loader" 
            }
        ]
    },
    resolve: {
        //给我们导入的文件自动按照从前到后的顺序加后缀
        extensions: [".vue", ".js", ".json"]
    },
    plugins: [
        //打包之前，删除dist目录，写在其它插件前面
        new CleanWebpackPlugin('dist'),

        //将来以template为模版，生成一个index.html并且发布到webpack-dev-server开启的node服务器上面去
        new HtmlWebpackPlugin({
            template: './template.html',
            minify:{
                removeComments: true,//压缩注释
                minifyJS: true,//压缩js
                minifyCSS: true,//压缩css
                collapseWhitespace: true,//去除空格
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //设置当前环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"'
            }
        }),
        //压缩，必须先转成es5，再压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false, //压缩掉警告
              drop_debugger: true,
              drop_console: true //去除console.log
            },
            comments: false //去掉版权信息等注释
        }),

        //抽离第三方包的，这里不要写bundle.js
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vue-lazyload", "v-distpicker", "moment", "jquery", "quanjiatong", "axios"],
            // filename: "vendor.js"
            // (给 chunk 一个不同的名字)

            minChunks: Infinity, //可以接一个数字，比如2，只有我们的第三方包至少被引用了2次，我才抽，如果只有一次，就不抽，Infinity代表不管你是使用了多少次我都抽取
            // (随着 entry chunk 越来越多，
            // 这个配置保证没其它的模块会打包进 vendor chunk)
        }),
        //把抽离的css放在哪里去
        new ExtractTextPlugin("css/styles-[hash:5].css"),

        //只保留moment中的简体中文
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
    ]
}
