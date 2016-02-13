var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config');

var app = new express();
var compiler = webpack(config);

app.use(express.static(__dirname + '/public'));

app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: config.output.publicPath }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/other', function(req, res) {
  res.sendFile(__dirname + '/views/other.html');
});

app.listen(3000, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('Server is running on port 3000.');
  }
});
