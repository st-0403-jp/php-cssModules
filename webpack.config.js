const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    target: 'node',
    entry: {
        'dist/index': './index.js',
        'convert/css': './css.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader?modules'
                    // {
                    //     loader: 'sass-loader',
                    //     options: {
                    //         sourceMap: (IS_PROD) ? false : true
                    //     }
                    // },
                    // {
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         resources: [
                    //             path.resolve(__dirname, 'src/styleConfig.scss')
                    //         ]
                    //     }
                    // }
                ]
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'html-loader',
            //             options: {
            //                 name: 'index.html'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.php$/,
                use: [
                    {
                        loader: path.resolve(__dirname, 'loader/stringify.js')
                    }
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: 'css/template.txt'
                    //     }
                    // }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    // node: {
    //     fs: 'empty',
    // },
    plugins: [
        //   new HtmlWebpackPlugin({
        //       template: './index.html'
        //   }),
        new MiniCssExtractPlugin({
            filename: 'dist/style.css'
        })
    ],
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     publicPath: '/',
//     historyApiFallback: true,
//     port: 8000
//   },
};