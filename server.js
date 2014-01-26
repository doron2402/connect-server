
var connect = require('connect'),
	routes = require('./routes'),
	app = connect()
  .use(require('compression')())
  .use(connect.logger('dev'))
  .use(connect.static('public'));

exports.connect = connect;
exports.app = app;
