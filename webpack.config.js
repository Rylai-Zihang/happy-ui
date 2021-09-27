const path = require('path')

module.exports = {
    entry: {
        index: './src/lib/index.tsx'
    },
    resolve: {
        alias: {
            Block: path.resolve(__dirname, './src/components/block/block.tsx'),
            CodeExample: path.resolve(__dirname, './src/components/codeExample/codeExample.tsx'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/src'),
        library: 'happy-ui',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react', '@babel/typescript'],
                    plugins: ['styled-jsx/babel'],
                },
            },
            {
                test: /\.css$/,
                use: [
                    'babel-loader',
                    {
                        loader: require("styled-jsx/webpack").loader,
                        options: {
                            type: 'scoped'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ],
            },
            {
                test: /\.md$/,
                use: ['babel-loader', path.resolve(__dirname, './loader/markdownLoader.js')]
            }
        ]
    }
}
