#!/usr/bin/env node

var path = require('path');
var architect = require("architect");
var debug = require('debug')('pague');

var envs = ['development', 'production'];
var env = process.env.NODE_ENV;
var configName = (~envs.indexOf(env)) ? env : envs[0];

var configPath = path.resolve(__dirname, "./config/", configName);
var plugins = require(configPath);

architect.createApp(architect.resolveConfig(plugins, __dirname + "/plugins"), function(err, app) {
    if (err) {
        debug("While starting the '%s':", configPath);
        throw err;
    }
    debug("Started '%s'!", configPath);
});