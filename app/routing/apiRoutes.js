// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
// var path = require('path');

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array

  // ---------------------------------------------------------------------------

app.post('/api/friends', function(req, res) {
    // Note the code here. Our "server" will respond to requests 
    // Then compare those results against database
  // req.body is available since we're using the body-parser middleware
  var bestMatch = {
    name: '',
    photo: '',
    difference: 1000
  };

  // Capture user input object  
  var newUser = req.body;
  // console.log('newUser = ' + JSON.stringify(newUser));
  // var userName = newUser.name;
  // var userPhoto = newUser.photo;
  var userResponses = newUser.scores;
  // console.log('userResponses = ' + userResponses);

  // var totalDiff = 0;

    // var matchName = '';
    // var matchPhoto = '';
    // var totalDiff = 10000;
  

    // examine existing friends data
    for (var i = 0; i < friends.length; i++) {
      
      console.log(friends[i].name);
      var totalDiff = 0;

      for (var j=0; j < friends[i].scores[j]; j++) {
        totalDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userResponses[j]));
      
      console.log('difference = ' + totalDiff);

// //       for (var j=0; j < friendsData[i].scores[j]; j++) {
// //      

      if (totalDiff <= bestMatch.difference){
        console.log('found');
      
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.difference = totalDiff;
      }
      }
    }
  
  friends.push(newUser);

  res.json(bestMatch); 

  });


   

//   // app.post("/api/clear", function() {
//   //   // Empty out the arrays of data
//   //   friendsData = [];

//   //   console.log(friendsData);



};