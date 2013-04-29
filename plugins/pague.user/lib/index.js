
/**
 * Module dependencies.
 */

var Emitter = require('events').EventEmitter;
var model = require('./model');
var routes = require('./routes');
var express = require('express');

/**
 * Expose `User`.
 */

module.exports = User;

/**
 * Initialize a new `user`
 * @api private
 */

function User (options, imports) {
  if (!(this instanceof User)) return new User(options, imports);

  options = options || {};
  imports = imports || {};
  this.model = model;
  this.db = imports.db;
  this.express = express;
  this.app = express();
  this.routes = routes;

  if (arguments.length) this.bind();
}

/**
 * Call necesary setup functions
 */

User.prototype.bind = function () {
  this.routes.apply(this);
};

User.prototype.all = function (req, res) {
  this.model.find();
};

User.prototype.create = function (req, res) {
  this.model.create();
};

User.prototype.update = function (req, res) {
  this.model.update();
};

User.prototype.remove = function (req, res) {
  this.model.remove();
};
