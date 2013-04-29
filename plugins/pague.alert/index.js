/**
 * Module dependencies.
 */

var Alert = require('./lib/');
var debug = require('debug')('pague.alert');

module.exports = function setup(options, imports, register) {

    debug('alert plugin start');

    /**
     * Registering plugin
     */

    register(null, {

        /**
         * Provides alert
         */

        alert: new Alert(options, imports)
    });
};
