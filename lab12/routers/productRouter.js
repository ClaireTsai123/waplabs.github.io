const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/products',(req, res, next) =>{
    res.sendFile(path.join(__dirname,'..','views','product-form.html'));
});
router.post('/products',(req, res, next) => {
    res.json(req.body);
});

module.exports = router;