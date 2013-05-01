
/**
 * Module dependencies.
 */

var _ = require('lodash');
var CronJob = require('cron').CronJob;
var mongoose = require('mongoose');
var createdModifiedPlugin = require('mongoose-createdmodified').createdModifiedPlugin;

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

  APP_EMAIL: 'paguecr@gmail.com',

  /**
   * The model name.
   *
   * @type {String}
   */

  READ_FIELDS: 'email title expression active message'

};

module.exports = function () {

  var mailer = this.mailer;

  /**
   * Defining schema.
   *
   * @type {Schema}
   */

  var schema = new Schema({
    email       : {
      type      : String,
      required  : true,
      index     : true,
      lowercase : true
    },
    title: {
      type      : String,
      required  : true
    },
    message     : {
      type      : String,
      'default' : ""
    },
    expression  : {
      type      : String,
      required  : true
    },
    active      : {
      type      : Boolean,
      'default' : true
    }
  });

  /*var options = {       s: 0, m: 11, h: 19 };

  schedule({ m: 18, h: 20 }, function () {
          console.log('SCHEDULED BY DAY');
  });

  schedule({ m: 18, h: 20, w: 4 }, function () {
          console.log('SCHEDULED BY WEEK');
  });

  schedule({ m: 18, h: 20, d: 8 }, function () {
          console.log('SCHEDULED BY MONTH');
  });

  schedule({ m: 18, h: 20, d: 8, M: 1 }, function () {
          console.log('SCHEDULED BY YEAR');
  });*/

  schema.methods.schedule = function (fn) {
    return schedule(this.expression, function () {
      this.sendAlert();
    }.bind(this));
  };

  /**
   * Send scheduled alert message.
   *
   * @param {String} fn Callback function
   * @return {Undefined}
   */

  schema.methods.sendAlert = function (fn) {
      var options = {
        from: cons.APP_EMAIL,
        to: this.email,
        subject: this.title
      };

      // Send the email
      mailer.send(options, this, fn);
  };

  function schedule (o, fn) {
    var expression = (typeof o === 'string') ? o : [00, o.m || '*', o.h || '*', o.d || '*', o.M || '0-11', o.w || '*'].join(' ');
    try {
      var job = new CronJob(expression, fn);
    } catch(err) {
      console.log("cron pattern not valid", err);
    }
  }

  /**
   * Registering plugins.
   */

  schema.plugin(createdModifiedPlugin);

  /**
   * Expose model.
   */

  return _.extend(mongoose.model(cons.MODEL_NAME, schema), cons);

};

