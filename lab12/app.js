const express = require('express');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const path = require('path');
const app = express();

app.set('env','development');

app.use(express.urlencoded({extended: true}));

app.use('/abc',express.static(path.join(__dirname,'resources','css')));
app.use(express.static(path.join(__dirname,'resources','js')));

app.use(productRouter);
app.use(userRouter);

// customize 404 page
app.use((req,res,next) =>{
    res.sendFile(path.join(__dirname,'views','404.html'));
})
//error handling
app.get('/',(req,res,next) =>{
    throw new Error('Whoops...')
})
app.use((err,req,res,next) =>{
    console.log(err.message);
    res.status(500).send('something wrong!!!!');
})

app.listen(3000);