var config = require("./webpack.config.js");
var webpack = require("webpack");
var webpackDevServer=require("webpack-dev-server");

config.entry.unshift(
  "webpack-dev-server/client?http://localhost:3000",
  "webpack/hot/dev-server"
);


var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  contentBase: "dist",
  hot: true,
  inline: true,
  historyApiFallback: true,
  proxy: {
        '/App*/*': {
            target: 'http://localhost/',
            // port: "80",
            secure: false
        },

    }

});

server.listen(3000);
