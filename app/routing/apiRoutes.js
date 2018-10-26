var path = require("path");
var userData = require("../data/friends.js");

module.exports = function(app) {
    
    app.get("/api/friends", (req,res) => {
        res.json(userData);

    });

    app.post("/api/friends", (req,res) => {
        
        var yourMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPhoto = userData.photo;

        var totalDifference = 0;

        for (var i=0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            for (var j=0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                
                if (totalDifference <= yourMatch.friendDifference) {

                    yourMatch.name = friends[i].name;
                    yourMatch.photo = friends[i].photo;
                    yourMatch.friendDifference = totalDifference;
                    
                }

            }
        }

        friends.push(userData);

        res.json(yourMatch);

    });


};