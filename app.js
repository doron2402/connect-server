console.log('running app...');

var server = require('./server'),
	routes = require('./routes'),
	connectRoute = require('connect-route'),
	port = 8080;

server.app.use(connectRoute(function (router) {
 	console.log(router);
    router.get('/', function (req, res, next) {
        res.end('index');
    });

    router.get('/home', function (req, res, next) {
        res.end('home');
    });

    router.get('/home/:id', function (req, res, next) {
        res.end('home ' + req.params.id);
    });

    router.post('/home', function (req, res, next) {
        res.end('POST to home');
    });

    router.get('/about', function(req, res, next){
    	res.end('About...');
    })
}));

server.app.listen(port);

console.log('server is running listenning on: ' + port);



console.log(server.app);
