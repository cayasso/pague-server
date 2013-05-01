/**
 * Module dependencies.
 */

var Mailer = require('./lib');
var debug = require('debug')('pague.mailer');

module.exports = function setup(options, imports, register) {

    debug('mailer plugin start');

    /**
     * Registering plugin
     */

    register(null, {

        /**
         * Provides alert
         */

        mailer: new Mailer(options, imports)
    });
};
