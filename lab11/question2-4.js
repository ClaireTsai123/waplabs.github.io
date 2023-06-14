// 1. import http
const http = require('http');

//2.create server
const server = http.createServer((request,response) => {
    require('fs').readFile('./image.jpg',(err,data) =>{
        if (err) throw err;
        response.end(data);
    })
});
//3.listen port
server.listen((3000),() => {
    console.log('listening 3000')
})