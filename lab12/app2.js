const express = require('express');
const path = require('path');
const app = express();

app.use('/', (req, res, next) => {
   res.sendFile(path.join(__dirname,'views','para.html'));
});
app.use('/products', (req, res, next) => {
   res.sendFile(path.join(__dirname,'views','para.html'));
});
app.use('/users', (req, res, next) => {
   res.sendFile(path.join(__dirname,'views','para.html'));
});

// app.use('/', (req, res, next) => {
//     const str = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Title</title>
// </head>
// <body>
// <p>Welcome to the Sakai Demo. The Demo configuration was created as a way to let you get an instance of Sakai up and running quickly and easily. For information about Sakai please see http://www.sakailms.org For technical information please start at the README.md at https://github.com/sakaiproject/sakai.</p>
// </body>
// `;
//     res.send(str);
// })
// match "/","/users/,"/products"

app.listen(3000, () => console.log('listen on 3000'));