/**
 * Dependencies
 */

var mongoose = require('mongoose');
var debug = require('debug')('pague:db-mongo');

module.exports = function (options, imports) {

  debug('starting mongo');

  /**
   * Options/parameters
   */

  var mongoConnection = options.mongoConnection;

  /**
   * Connect to mongoose database.
   */

  mongoose.connect(mongoConnection);

  return {};
};