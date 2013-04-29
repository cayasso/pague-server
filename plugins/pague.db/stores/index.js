/**
 * Module dependencies
 */

var mongo = require('./mongo');
var memory = require('./memory');

/**
 * Store drivers
 */

var stores = {
	mongo: mongo,
	memory: memory
};

/**
 * Expose modules
 */

module.exports = function (options, imports) {
	var key, result = {};
	for (key in stores) result[key] = stores[key](options, imports);
	return result;
};