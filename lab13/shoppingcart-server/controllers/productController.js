const Product = require('../models/product');

exports.save = (req, res, next) => {
    const prod = new Product(null, req.body.title, req.body.price, req.body.description).save();
    res.status(201).json(prod);
}
exports.fetchAll = (req, res, next) => {
    res.json(Product.getAll());
}

exports.getProductById = (req, res, next) => {
    res.status(200).json(Product.getProductById(req.params.id));
}

exports.deleteById = (req, res, next) => {
    new Product(req.params.id).delete();
    res.status(204).end();

}
exports.update = (req, res, next) => {
    new Product(req.params.id, req.body.title, req.body.price, req.body.description).update();
    res.status(204).end();
}