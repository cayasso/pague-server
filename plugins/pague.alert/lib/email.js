var cronJob = require('cron').cronJob;
var mailer = require('mailer');

/**
 * Send email message
 *
 * @param  {String}   template
 * @param  {Object}   options
 * @param  {Object}   data
 * @param  {Function} fn
 * @api public
 */
exports.sendEmail = function (template, options, data, fn) {
  fs.readFile(__dirname + '/../views/emails/' + template + '.html', 'utf8', function (error, html) {
    if (error) {
      logme.error(error);
      throw notify.AppError(error);
    }
    options.html = require('express-hogan.js').compile(html)({ locals: data });
    mailer.send(_.extend(app.set('mailer'), options), fn || function (error, result) {
      if (error) {
        logme.error(error);
        throw notify.AppError(error);
      }
    });
  });
};
