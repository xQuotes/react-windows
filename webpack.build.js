export default {
  output: {
    library: 'app',
    libraryTarget: 'umd',
    filename: 'xq.desktopUI.js'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react-addons-css-transition-group': {
        root: 'React.addons.CSSTransitionGroup',
        commonjs2: 'react-addons-css-transition-group',
        commonjs: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        query:{
          presets: ["react","es2015","stage-1"],
          plugins: [
             ["transform-decorators-legacy"],
          ]
        },
        loader: 'babel'
      },
      {
        test: /\.(ico|jpg|png|gif)$/,
        loader: 'url-loader?limit=18192'
      }
    ]
  },
  watch: false,
};
