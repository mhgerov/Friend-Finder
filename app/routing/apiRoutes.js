var friends = require('../data/friends.js');

module.exports = function(app,root) {
	app.get('/api/friends', function (req,res) {
		res.send(friends);
	});
};

