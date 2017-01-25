var express = require('express');
var router = express.Router();
var passHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

/* save user to db (singUp) */
router.post('/', function (req, res, next) {
    //it would be even better to submit an encrypted pass
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passHash.generate(req.body.password),
        email: req.body.email,
        allowed_solutions: 0
    });

    user.save(function(err, result){
        if(err){
            return res.status(404).json({
                title: 'User already exists!',
                obj: err
            });
        }

        res.status(200).json({
            title: 'status dela',
            obj: result
        });
    });

});

//fetch user from db (signIn)
router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'An error occurred!',
                obj: err
            });
        }

        if(!doc){
            return res.status(404).json({
                title: 'The user '+ req.body.email + ' was not found',
                obj: { message: 'User could not be found!'}
            });
        }

        if(!passHash.verify(req.body.password, doc.password)){
            return res.status(404).json({
                title: 'Wrong password',
                obj: { message: 'Your password is invalid!'}
            });
        }

        // create a token with the payload of the user,
        // with a giud private key(by which we can verify the token later) and an expiration time
        var token = jwt.sign({user: doc},'10099d7691164cb4804c88916cf8f064', {expiresIn: 36000});

        res.status(200).json({
            title: 'Success',
            token: token,
            userId: doc._id,
            user: doc
        });
    });
});

//Save solution by id
router.put('/updatePlan', function(req, res, next){
    User.findById(req.body.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No user found!',
                obj: {message: 'No user found!'}
            });
        }

        doc.allowed_solutions = Number(doc.allowed_solutions) + req.body.solutions;
        doc.save(function(err, result){
            if(err){
                return res.status(404).json({
                    title: 'Could not update plan',
                    obj: err
                });
            }

            res.status(200).json({
                title: 'Plan updated',
                obj: result
            });
        });
    });
});

//Get user by id
router.get('/getUser/:id', function(req, res, next){
    User.findById(req.params.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No user found!',
                obj: {message: 'No user found!'}
            });
        }

        res.status(200).json({
            user: doc
        });
    });
});

module.exports = router;