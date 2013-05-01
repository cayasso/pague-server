/**
 * Module dependencies.
 */

var mailer = require('nodemailer');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * `Transport` constructor.
 *
 * @api public
 */

function Transport (options, imports) {
  options = options || {};
  this.mailer = mailer;
  this.service = options.service = null;
  this.auth = options.auth;
}

/**
 * Create a new mail `transport`.
 *
 * This function must be overridden by subclasses.  In abstract form, it always
 * throws an exception.
 *
 * @param {String} service
 * @param {Object} options
 * @api protected
 */

Transport.prototype.create = function (service, options) {
  throw new Error('Transport#fetch must be overridden by subclass');
};
