/**
 * Module dependencies
 */

var http = require('http');
var express = require('express');
var debug = require('debug')('pague:express');

module.exports = function setup(options, imports, register) {

  debug('express plugin start');

  var sessionOptions = options.session;

  /**
   * Creating an express app
   */

  var app = express();

  /**
   * creating server
   */

  var server = http.Server(app);

  /**
   * Express settings
   */

  app.enable("jsonp callback");
  app.use(express.favicon());
  app.use(express.cookieParser());
  app.use(express.session(sessionOptions));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  /**
   * Register module
   */

  register(null, {
    onDestruct: function (callback) {
      server.close(callback);
      debug('express server stopped');
    },
    express: {
      app: app,
      server: server,
      express: express
    }
  });
};