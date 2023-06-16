const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/',bookController.save);
router.get('/:id', bookController.getBookById);
router.get('/',bookController.fetchAll);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.deleteById);

module.exports = router;