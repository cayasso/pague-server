/**
 * Expose the `routes`
 */

var express = require('express');
var app = express();

module.exports = function () {

  // scope

  var self = this;

  // configure

  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/build'));

  // alerts

  app.get('/alert/all', function (req, res) {
    var data = req.body;
    var query = { email: data.email };
    self.all(query, function (error, alerts) {
      if (error) return res.json({ message: "Unable to save alert" });
      if (!alerts) return res.json({ message: "Unable to find alerts"});
      res.json(alerts);
    });
  });

  app.post('/alert', function (req, res) {
    self.post(query, function (error, alert) {
      if (error) return res.json({ message: "Unable to create alert", error: error});
      res.json(alert);
    });
  });

  app.put('/alert/:id', function (req, res) {
    var id = params.id;
    var update = req.body;
    delete update.id;
    self.update(id, update, function (error, alert) {
      if (error) return res.json({ message: "Unable to save alert", error: error });
      if (!alert) return res.json({ message: "Unable to find alert"});
      res.json(alert);
    });
  });

  app.del('/alert/:id', function (req, res) {
    var id = params.id;
    self.remove(id, function (error) {
      if (error) return res.json({ message: "Unable to remove alert." });
      res.json({ ok: true });
    });
  });

};