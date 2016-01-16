var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware')
var webpackConfig = require('./webpack.config.js');

var compiler = webpack(webpackConfig);
var middleware = webpackMiddleware(compiler);
var app = express();
app.use(middleware);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
