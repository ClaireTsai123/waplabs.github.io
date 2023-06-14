const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res) =>{
    const img = fs.createReadStream('./image.jpg');
    img.pipe(res);
}).listen(3000);

// server.on('request',(req,res) =>{
//     const img = fs.createReadStream('./image.jpg');
//     img.pipe(res);
// });
// server.listen(3000);