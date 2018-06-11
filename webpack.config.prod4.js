const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

const path = require('path')

//打包之前，删除dist目录
var CleanWebpackPlugin = require('clean-webpack-plugin')

//抽离样式的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: {
        axios: ['axios'],
        jquery: ['jquery'],
        "vue-moment": ['vue-moment'],
        "v-distpicker": ["v-distpicker"],
        "vue-lazyload": ["vue-lazyload"],
        quanjiatong: ['vue', 'vue-router', 'vuex'],
        bundle: './src/main.js' //千万不要忘记了我
    }, //打包的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
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
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //压缩
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(ttf|woff|eot|svg|jpg|gif|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,//这个4000代表阀值，这个阀值，在公司中根据需要进行设置
                            name: 'statics/[name]-[hash:5].[ext]'//代表把抽离出去的图片、字体文件从bundle.js中抽离出去之后，放在dist目录下面的statics中
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除第三方的包
                // loader: "babel-loader" 
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', '.css']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [//生成html页面
        //打包之前，删除dist目录，写在其它插件前面
        new CleanWebpackPlugin('dist'),

        new HtmlWebpackPlugin({
            template: './template.html',
            filename: 'index.html',
            minify: {
                removeComments: true,//压缩注释
                minifyJS: true,//压缩js
                minifyCSS: true,//压缩css
                collapseWhitespace: true,//去除空格
            }
        }),
        new webpack.ProvidePlugin({//全局导入jquery
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("css/styles.css")
    ]
}