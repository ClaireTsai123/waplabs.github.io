const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/',productController.save);
router.get('/:id', productController.getProductById);
router.get('/',productController.fetchAll);
router.put('/:id', productController.update);
router.delete('/:id', productController.deleteById);

module.exports = router;