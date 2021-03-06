var express = require("express");
var path = require("path");
//var bodyParser = require("bodyParser");
var PORT = process.env.PORT || 3000;

function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
  }
  
  // Use the Node HTTP package to create our server.
  // Pass the handleRequest function to empower it with functionality.
  var server = http.createServer(handleRequest);
  
  // Start our server so that it can begin listening to client requests.
  server.listen(PORT, function() {
  
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  