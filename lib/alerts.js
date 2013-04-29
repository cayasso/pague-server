var alerts = [];

/**
 * Index of `id` in db.
 */

function indexOf(id) {
  for (var i = 0, len = alerts.length; i < len; ++i) {
    if (id == alerts[i].id) {
      return i;
    }
  }
}

/**
 * GET all alerts.
 */

exports.all = function(req, res){
  res.send(alerts);
};

/**
 * POST a new alert.
 */

exports.create = function(req, res){
  var alert = req.body;
  var id = alerts.push(alert) - 1;
  alert.id = id;
  res.send({ id: id });
};

/**
 * DELETE alert :id.
 */

exports.remove = function(req, res){
  var id = req.params.id;
  var i = indexOf(id);
  alerts.splice(i, 1);
  res.send(200);
};

/**
 * PUT changes to alert :id.
 */

exports.update = function(req, res){
  var id = req.params.id;
  var i = indexOf(id);
  var body = req.body;
  var alert = alerts[i];
  if (!alert) return res.send(404, 'alert does not exist');
  alert.title = body.title;
  alert.complete = body.complete;
  res.send(200);
};





