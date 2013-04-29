/**
 * Module dependencies
 */

var assert = require("assert");
var debug = require('debug')('pague:db');
var stores = require('./stores');

module.exports = function setup(options, imports, register) {

    debug('db plugin start');

    /**
     * Get stores
     */

    stores = stores(options, imports);

    /**
     * Register the module.
     */

    register(null, {
        db: {
            stores: stores,
            configs: options
        }
    });
};