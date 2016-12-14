var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

/* GET home page. */
router.get('/preview', function (req, res) {
    res.render('preview');
});

module.exports = router;