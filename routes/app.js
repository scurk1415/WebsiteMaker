var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

/* GET home page. */
router.get('/view/:id', function (req, res) {
    res.render('view');
});

module.exports = router;