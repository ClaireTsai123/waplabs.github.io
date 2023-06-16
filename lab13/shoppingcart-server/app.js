const express = require('express');
const bookRouter = require('./routes/bookRouter');
const app = express();

app.use(express.json());
app.use('/books', bookRouter);

app.use((req, res ,next) => {
    res.status(404).send('API not supported');
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000, () => console.log('listening to 3000...'));