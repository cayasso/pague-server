/**
 * Expose the `routes`
 */

module.exports = function () {

	// scope
	var alert = this;

	// configure

	this.app.use(express.bodyParser());
	this.app.use(express.static(__dirname + '/build'));

	// alerts

	this.app.get('/alert/all', function (req, res) {
		var data = req.body;
		var query = { email: data.email };
		this.all(query, function (error, alerts) {
			if (error) return res.json({ message: "Unable to save alert" });
			if (!alerts) return res.json({ message: "Unable to find alerts"});
			res.json(alerts);
		});
	}.bind(this));

	this.app.post('/alert', function (req, res) {
		this.post(query, function (error, alert) {
			if (error) return res.json({ message: "Unable to create alert", error: error});
			res.json(alert);
		});
	}.bind(this));

	this.app.put('/alert/:id', function (req, res) {
		var id = params.id;
		var update = req.body;
		delete update.id;
		this.update(id, update, function (error, alert) {
			if (error) return res.json({ message: "Unable to save alert", error: error });
			if (!alert) return res.json({ message: "Unable to find alert"});
			res.json(alert);
		});
	}.bind(this));

	this.app.del('/alert/:id', function (req, res) {
		var id = params.id;
		this.remove(id, function (error) {
			if (error) return res.json({ message: "Unable to remove alert." });
			res.json({ ok: true });
		});
	}.bind(this));

	// catch-all

	this.app.all('*', build, function(req, res){
	  res.sendfile('index.html');
	});

};