const Book = require('../models/book');

exports.save = (req, res, next) => {
    const b = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate,req.body.author).save();
    res.status(201).json(b);
}
exports.fetchAll = (req, res, next) => {
    res.json(Book.getAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.getBookById(req.params.id));
}

exports.deleteById = (req, res, next) => {
    new Book(req.params.id).delete();
    res.status(204).end();

}
exports.update = (req, res, next) => {
    new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate,req.body.author).update();
    res.status(204).end();
}