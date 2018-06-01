const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/js/index.jsx',
    },
    output: {
        path: __dirname + '/public',
        filename: "./dist/[name].[hash].js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,loader: "babel-loader",exclude: /(node_modules|bower_components)/,query: { presets:['react'] } },
            { test: /\.ya?ml$/,loader: "json-loader!yaml-loader" },
            { test: /\.scss$/,loader: "style-loader!css-loader!sass-loader" },
            { test: /\.css$/,loader: 'style-loader!css-loader' },
            { test: /\.(png|jpe?g|gif|svg)$/,loader: 'file-loader',options: { name: 'img/[name].[hash].[ext]' } },
            { test: /\.(ico)$/,loader: 'file-loader',options: { name: '[name].[ext]' } },
            { test: /\.(eot|ttf|woff|woff2)$/,loader: 'file-loader',options: { name: 'font/[name].[hash].[ext]' } },
            { test: /\.md$/,loader: 'file-loader',options: { name: 'static/[name].[hash].[ext]' } },
            { test: /\.html$/, loader: "html-loader?interpolate&minimize&removeComments" }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: __dirname + "/src/tmpl/index.html",
            favicon: 'src/img/favicon.ico',
            inject: true,
            chunks: ['index']
        }),
    ],
    devtool:'#eval-source-map',
    devServer: {
        contentBase: "./public/",
        historyApiFallback: true,
        inline: true
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}