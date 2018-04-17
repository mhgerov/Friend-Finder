var friends = require('../data/friends.js');

module.exports = function(app,root) {
	app.get('/api/friends', function (req,res) {
		res.send(friends);
	});

	app.post('/api/friends', function (req,res) {
		console.log('incoming: ');
		console.log(req.body);
		var baseScore = req.body.scores;
		console.log('Scores Type: '+typeof(req.body.scores[0]));
		console.log('Base Score: '+baseScore);	
		var bestMatch = 0;
		var bestScore = 50;
		if (friends.friends.length>1) {
			for (person in friends.friends) {
				var currentScore = friends.friends[person].scores;
				var diff=0;
				for (i in baseScore) {
					diff+=Math.abs(baseScore[i]-currentScore[i]);
				}
				console.log('Score with '+friends.friends[person].name+': '+diff);
				if (diff<bestScore) {
					bestScore = diff;
					bestMatch = person;
				}
			}
		}
		//Send the matched friend in the response
		res.send(friends.friends[bestMatch]);
		//Append new friends object into array of friends
		friends.friends.push(req.body);
	});
};
