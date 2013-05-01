/**
 * Module dependencies.
 */

var Transport = require('../transport');
var debug = require('debug')('pague:transports-smtp');

/**
 * Module exports.
 */

module.exports = Smtp;

/**
 * Smtp transport constructor exports.
 */

function Smtp (options) {
  this.name = "Smtp";
  options = options || {};
  this.service = options.service || null;
  this.auth = options.auth || null;
  Transport.apply(this, arguments);
  return this.create();
}

/**
 * Inherits from Transport.
 */

Smtp.prototype.__proto__ = Transport.prototype;

/**
 * Create a new smtp `transport`.
 *
 * @param {String} service
 * @param {Object} auth
 * @return {Transport} the transport object
 * @api protected
 */

Smtp.prototype.create = function (service, auth) {
  service = service || this.service;
  auth = auth || this.auth;
  if (!service || !auth) return null;
  return this.mailer.createTransport('SMTP', {
    service: service,
    auth: auth
  });
};