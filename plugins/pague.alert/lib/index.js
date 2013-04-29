
/**
 * Module dependencies.
 */

var Emitter = require('events').EventEmitter;
var model = require('./model');
var routes = require('./routes');
var express = require('express');

/**
 * Expose `Alert`.
 */

module.exports = Alert;

/**
 * Initialize a new `alert`
 * @api private
 */

function Alert (options, imports) {
  if (!(this instanceof Alert)) return new Alert(options, imports);

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

Alert.prototype.bind = function () {
  this.routes.apply(this);
};

Alert.prototype.all = function (query, fn) {
  this.model.find(query, fn);
};

Alert.prototype.create = function (data, fn) {
  this.model.create(data, fn);
};

Alert.prototype.update = function (id, data, fn) {
  this.model.update({ _id: id }, data, fn);
};

Alert.prototype.remove = function (id, fn) {
  this.model.remove({ _id: id }, fn);
};

Alert.prototype.remove = function (id, fn) {
  this.model.remove({ _id: id }, fn);
};

Alert.prototype.sendReminder = function () {
  // cron job code
};

