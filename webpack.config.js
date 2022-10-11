const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

const webpackConfig = {
    entry: path.resolve(__dirname, "src", "index.js"),

    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    performance: {
        hints: false,
        maxEntrypointSize: 50000,
        maxAssetSize: 50000
    },
    
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
            }, 
            {
                test: /\.(js)x?$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["@babel/preset-react", {"runtime": "automatic"}]]
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Starter",
            template: path.resolve(__dirname, "src", "index.html")
        }), 

        new EslintWebpackPlugin({
            extensions: "js",
            exclude: "node_modules",
            files: "src"
        }),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                node_vendors: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 1
                }
            }
        }
    },

    devtool: "inline-source-map",
    devServer: { 
        contentBase: "./dist",
    },

    mode: "production"
}

module.exports = webpackConfig;