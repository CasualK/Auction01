var http = require('http');
var fs = require('fs');
const port = 3000;
const hostname = 'localhost';
var app = http.createServer(function(request, response) {
    var url = request.url;
    if (request.url == '/') {
        url = '/auction.html';
    }
    if (request.url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});


app.listen(port, hostname, () => {
    console.log(`서버 가동 중... : https://${hostname}:${port}/`);
});