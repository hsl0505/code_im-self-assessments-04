var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    // YOUR CODE HERE
    if (endpoint === "/error") {
      response.statusCode = 404;
      response.end("");
    } else {
      if (!globalCounter[property]) {
        globalCounter[property] = 1;
        response.statusCode = 200;
        response.end("set");
      } else {
        globalCounter[property] = globalCounter[property] + 1;
        response.statusCode = 200;
        response.end("+1");
      }
    }
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    if (endpoint === "/error") {
      response.statusCode = 404;
      response.end("");
    } else {
      if (!globalCounter[property]) {
        response.statusCode = 200;
        response.end("empty");
      } else {
        response.statusCode = 200;
        response.end(JSON.stringify(globalCounter[property]));
      }
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
