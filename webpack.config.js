const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        app: "./resources/js/app.tsx",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "public/assets"),
        publicPath: "/assets/",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "automatic" }],
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new WebpackManifestPlugin({
            publicPath: "/assets/",
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 8080,
        hot: true,
        proxy: {
            "/": "http://localhost:8000",
        },
    },
};
