var multer = require('multer');
var cors = require('cors');
var path = require('path');
var express = require('express');
var router = express.Router();

router.use(cors());

var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname+'/../public/uploaded')
        },
        filename: function(req, file, cb) {
            var ext = path.extname(file.originalname);
            cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
        }
    })
});

router.post('', upload.any(), function(req, res) {
    console.log(upload.storage);
    res.json(req.files.map(function(file) {
        //console.log(file);
        var ext = path.extname(file.originalname);
        return {
            originalName: file.originalname,
            filename: file.filename
        }
    }));
});


module.exports = router;