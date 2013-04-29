
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var createdModifiedPlugin = require('mongoose-createdmodified').createdModifiedPlugin;
var _ = require('lodash');

/**
 * Global variables.
 */

var Schema = mongoose.Schema;
var Types = Schema.Types;
var cons = {

  /**
   * The model name.
   *
   * @type {String}
   */

  MODEL_NAME: 'Alert',

  /**
   * The model name.
   *
   * @type {String}
   */

  READ_FIELDS: 'email name expression active message'

};

/**
 * Defining schema.
 *
 * @type {Schema}
 */

var schema = new Schema({
  email: { type: String, required: true, index: true, lowercase: true },
  name: { type: String, required: true },
  message: { type: String, 'default': "" },
  expression: { type: String, required: true },
  active: { type: Boolean, 'default': true }
});

/**
 * Registering plugins.
 */

schema.plugin(createdModifiedPlugin);

/**
 * Expose model.
 */

module.exports = _.extend(mongoose.model(cons.MODEL_NAME, schema), cons);

