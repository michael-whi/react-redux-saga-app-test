const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    "mode": "development",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/build',
        "filename": "bundle.js"
    },
    "devtool": "source-map",
    "resolve": {
        "alias": {
            "containers": path.resolve(__dirname, 'src/containers/'),
            "utils": path.resolve(__dirname, 'src/utils/'),
            "components": path.resolve(__dirname, 'src/components/')
        }
    },
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "eslint-loader",
                "options": {
                  "emitWarning": true,
                  "failOnError": false,
                  "failOnWarning": false
                }
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader"
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.html$/,
                "use": [
                    {
                        "loader": "html-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      // Inline files smaller than 10 kB
                      limit: 10 * 1024,
                      noquotes: true,
                    },
                  },
                ],
              },
              {
                test: /\.(jpg|png|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      // Inline files smaller than 10 kB
                      limit: 10 * 1024,
                    },
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        enabled: false,
                        // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                        // Try enabling it in your environment by switching the config to:
                        // enabled: true,
                        // progressive: true,
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      optipng: {
                        optimizationLevel: 7,
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4,
                      },
                    },
                  },
                ],
              },
        ]
    },
    "plugins": [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}