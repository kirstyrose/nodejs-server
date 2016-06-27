'use strict';

const http = require('http');
// constant variable, 'let' allows you to mutate, we don't use var
// require, import this code to this application - library
const hostname = '127.0.0.1';
// localhost, variable containing a string
const port = 3000;
// the port that our application will use
const server = http.createServer((request, response) => {
  // => == function (req, res){} node shorthand
  // browser makes a request to the server for the below information
  response.statusCode = 200;
  // once ran, respond okay
  response.setHeader('Content-Type', 'text/html');
  // set the content type to html
  response.end('Hello World\n');
  // respond
});
// creates a server, which we store in server

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// server listen, if it works - let us know.

// output = function (input)
