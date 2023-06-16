const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/users',(req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','user-form.html'));
});
router.post('/users',(req, res, next) => {
    res.send(req.body);
});

module.exports = router;