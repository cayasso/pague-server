/**
 * Module dependencies.
 */

var assert = require('assert');
var debug = require('debug')('pague:app');

module.exports = function setup(options, imports, register) {

    debug('pague start');

    assert(options.host, 'Option "host" is required');
    assert(options.port, 'Option "port" is required');

    /**
     * Options definition
     */

    var port = options.port;
    var host = options.host;

    /**
     * Imported modules
     */

    var express = imports.express;
    var app = express.app;
    var server = express.server;
    var db = imports.db;
    var user = imports.user;
    var alert = imports.alert;


    /**
     * Use modules
     */

    app.use(user.app);
    app.use(alert.app);

    /**
     * Starting the application server
     */

    server.listen(port, function(){
        debug('server listening on port "%s"', port);
    });

    /**
     * Expose module
     */

    register();
};