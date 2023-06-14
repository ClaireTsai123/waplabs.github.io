/* 2.Create a web server that's going to send a response of big image to any client ' +
'that sends a request to your specified server:port. */
const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request',function(req,res){
    res.writeHead(200,{'Content-Type':'image/jpeg'});
    let image = fs.readFileSync('./image.jpg');
    res.end(image,'binary');
});
server.listen(3000);

