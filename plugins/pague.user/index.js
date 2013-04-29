/**
 * Module dependencies.
 */

var User = require('./lib/');
var debug = require('debug')('pague.user');

module.exports = function setup(options, imports, register) {

    debug('user plugin start');

    /**
     * Registering plugin
     */

    register(null, {

        /**
         * Provides user
         */

        user: new User(options, imports)
    });
};
