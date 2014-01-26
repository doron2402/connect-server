exports.homeController = function(req, res, next){
	res.end('home');
};

exports.homeIdController = function(req, res, next){
	res.end('home ' + req.params.id);
};
