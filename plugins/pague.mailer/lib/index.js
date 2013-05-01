/**
 * Module dependencies.
 */

var ejs = require('ejs');
var fs = require('fs');
var transports = require('./transports');
var debug = require('debug')('pague:mailer-core');

/**
 * Module exports.
 */

module.exports = Mailer;

/**
 * `Mailer` constructor.
 */

function Mailer (options, imports) {
  options = options || {};
  var transport = options.transport || 'smtp';
  this.transport = new transports[transport](options);
  this.template();
  debug('loading %s transport', transport);
}

/**
 * Send email.
 * 
 * @param {Object}
 * @param {Function}
 * @api public
 */

Mailer.prototype.send = function (options, data, fn) {
  options = options || {};
  if ('function' === typeof data) {
    fn = data;
    data = {};
  }
  options.html = options.html || ejs.render(this.html, data);
  if (this.transport) {
    this.transport.sendMailer(options, fn);
  }
};

/**
 * Send template.
 * 
 * @param {Object}
 * @param {Function}
 * @api public
 */

Mailer.prototype.template = function (path) {
  path = path || __dirname + '/templates/alert.html';
  this.html = fs.readFileSync(path, 'utf8');
  return this;
};
