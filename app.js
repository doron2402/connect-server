console.log('running app...');

var server = require('./server'),
	routes = require('./routes'),
    controller = require('./controllers');
	connectRoute = require('connect-route'),
	port = 8080;

console.log(controller.homeController);

server.app.use(connectRoute(function (router) {
 	
    router.get('/', controller.homeController);

    router.get('/home', controller.homeController);

    router.get('/home/:id', controller.homeIdController);

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
