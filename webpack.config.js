const path = require('path')

module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        alias: {
            Block: path.resolve(__dirname, './src/components/block.tsx'),
            CodeExample: path.resolve(__dirname, './src/components/codeExample.tsx'),
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
                loader: 'awesome-typescript-loader'
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
                use: ['babel-loader', path.resolve(__dirname, './loader/docgen.js')]
            }
        ]
    }
}
