// Create web server
// Run with: node comments.js
// Then visit: http://localhost:3000/comments

var http = require('http');
var data = require('./data/comments.json');

http.createServer(function(request, response) {
    if (request.url === "/comments") {
        response.writeHead(200, {
            'Content-Type': 'text/json'
        });
        response.end(JSON.stringify(data));
    } else {
        response.writeHead(404);
        response.end("Not found");
    }
}).listen(3000);

console.log('Listening on port 3000');