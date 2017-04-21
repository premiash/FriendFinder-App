// ===============================================================================
// These data sources hold arrays of information on user
// ===============================================================================

var friends = require("../data/friends");
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	
	// app.get("/api/friends", function(req, res) {
	//     res.sendFile(friends.join(__dirname, "friends.js"));
	// });
	app.get("/api/friends", function(req, res) {
		res.json(friends);
  	});

  	app.post("/api/friends", function(req, res) {

  		var bestMatch = {
  			name: "",
  			photo: "",
  			matchDifference: 1000
  		}
  		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.image;
		var userScores 	= userData.scores;

		var totalDifference = 0;

		//loop through the friends data array of objects to get each friends scores
		for(var i = 0; i < [friends].length-1; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference variable set above
			for(var j = 0; j < 10; j++){
				// We calculate the difference between the scores and sum them into the totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= bestMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.matchDifference = totalDifference;
				}
			}
		}

		friends.push(userData);

		res.json(bestMatch);
  	});
};