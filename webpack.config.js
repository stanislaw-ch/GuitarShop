const path = require(`path`);
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const OptimizeCssAssetsWebpackPlugin = require(`optimize-css-assets-webpack-plugin`);
const TerserWebpackPlugin = require(`terser-webpack-plugin`);

const isDev = process.env.NODE_ENV === `development`;
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: `vendors`,
          test: /node_modules/,
          chunks: `all`,
          enforce: true
        }
      }
    }
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }
  return config;
};

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

// const cssLoaders = (extra) => {
//   const loaders = [
//     {
//       loader: MiniCssExtractPlugin.loader,
//       options: {
//       },
//     }, `css-loader`
//   ];

//   if (extra) {
//     loaders.push(extra);
//   }

//   return loaders;
// };

const babelOptions = (preset) => {
  const options = {
    presets: [`@babel/preset-env`],
    plugins: [`@babel/plugin-proposal-class-properties`]
  };

  if (preset) {
    options.presets.push(preset);
  }

  return options;
};

const jsLoaders = () => {
  const loaders = [{
    loader: `babel-loader`,
    options: babelOptions()
  }];

  if (isDev) {
    loaders.push(`eslint-loader`);
  }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, `src`),
  mode: `development`,
  entry: {
    main: [`@babel/polyfill`, `./js/main.js`]
  },
  output: {
    filename: filename(`js`),
    path: path.resolve(__dirname, `public`),
    publicPath: ``
  },
  resolve: {
    extensions: [`.js`, `.json`]
  },
  optimization: optimization(),
  devServer: {
    contentBase: path.join(__dirname, `public`),
    port: 8080,
    watchContentBase: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  devtool: isDev ? `source-map` : false,
  plugins: [
    new HTMLWebpackPlugin({
      template: `./index.html`,
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, `src/assets/img`),
          to: path.resolve(__dirname, `public/img`)
        }
      ]}),
    new MiniCssExtractPlugin({
      filename: `css/${filename(`css`)}`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          // `postcss-loader`,
          `sass-loader`,
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: cssLoaders()
      // },
      // {
      //   test: /\.less$/,
      //   use: cssLoaders(`less-loader`)
      // },
      // {
      //   test: /\.s[ac]ss$/,
      //   use: cssLoaders(`sass-loader`)
      // },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: /fonts/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `[name].[ext]`,
              outputPath: `/img`,
            }
          }
        ]
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        exclude: /img/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `[name].[ext]`,
              outputPath: `/fonts`,
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: `babel-loader`,
      //     options: babelOptions(`@babel/preset-typescript`)
      //   }
      // },
      // {
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: `babel-loader`,
      //     options: babelOptions(`@babel/preset-react`)
      //   }
      // }
    ]
  }
};
