var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World working through eclips\n');
}).listen('https://eclipsetst.herokuapp.com/');
console.log('Server running at http://127.0.0.1:1337/');
