var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Solution = require('../models/solution');

//Get all users
router.get('/getUsers', function(req, res, next){
    User.find(function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No users found!',
                obj: {message: 'No users found!'}
            });
        }

        res.status(200).json({
            users: doc
        });
    });
});

//Get all solutions
router.get('/getSolutions', function(req, res, next){
    Solution.find(function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No solutions found!',
                obj: {message: 'No solutions found!'}
            });
        }

        res.status(200).json({
            solutions: doc
        });
    });
});

module.exports = router;