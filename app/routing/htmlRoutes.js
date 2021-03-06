module.exports = function(app,root) {
	app.get('/', function (req,res) {
		res.sendFile(root+'/app/public/home.html');
	});
	
	app.get('/survey', function (req,res) {
		res.sendFile(root+'/app/public/survey.html');
	});
	
	app.get('/assets/:item', function (req,res) {
		res.sendFile(root+'/app/public/assets/'+req.params.item);
	});
};
