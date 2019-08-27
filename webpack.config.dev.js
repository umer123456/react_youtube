const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:[`${__dirname}/src/index.jsx`,`${__dirname}/src/scss/style.scss`],
    output:{
        path:`${__dirname}/dist/js`,
        filename:"bundle.js",
        publicPath:"/js"
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["env","react"],
                        plugins:[
                            "transform-object-rest-spread",
                            "transform-class-properties"
                        ]
                    }
                }
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    use:[
                        {
                            loader:"css-loader",
                            options:{
                                url:false
                            }
                        },
                        "sass-loader"
                    ],
                })
            }
        ]
    },
    devServer:{
        contentBase:"./dist",
        historyApiFallback:true
    },
    watch:true,
    devtool: "source-map",
    resolve:{extensions:[".js"]},
    plugins:[
        new ExtractTextPlugin({
            filename:"../css/style.css"
        })
    ]
}