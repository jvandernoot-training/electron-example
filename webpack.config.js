
module.exports = {
    mode: 'production',
    entry: [
        '.main.js',
    ],
    target: 'node',
    module: {
        rules: [
            {
                test: /\.node$/,
                loader: "native-ext-loader"
            }
        ],
    },
};
