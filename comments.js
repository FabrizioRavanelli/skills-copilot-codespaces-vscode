// create web server
var http = require('http');
var url = require('url');
var fs = require('fs');

// create server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
// end of comments.js
// What is the difference between the two snippets? 
// The comments.js file has comments to explain each section of the code. 
// This makes it easier for other developers to understand the code and make changes if needed. 
// Comments are an important part of code documentation and can help improve the readability and maintainability of the code.