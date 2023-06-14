const http = require('http');
const fs = require('fs');
http.createServer((request,response) => {
     fs.readFile('./image.jpg',(err, data) => {
        if (err) throw err;
        response.end(data);
    });
}).listen(3000,() => console.log('listening on 3000'));