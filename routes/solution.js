var express = require('express');
var router = express.Router();

var Solution = require('../models/solution');

//get solution by id
router.post('', function(req, res, next){
    Solution.findById(req.body.uid, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'no solution',
                obj: {message: 'no solution'}
            });
        }

        res.status(200).json({
            solutions: doc
        });
    });
});

//DELETE solution by id
router.delete('/:id',function(req, res, next){
    Solution.findById(req.params.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'no solution',
                obj: {message: 'no solution'}
            });
        }

        doc.remove(function(err, result){
            if(err){
                return res.status(404).json({
                    title: 'An error occurred',
                    obj: err
                });
            }

            res.status(200).json({
                title: 'success',
                obj: result
            });
        });
    });
});

//Save solution by id
router.put('/:id', function(req, res, next){
    Solution.findById(req.params.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'no solution',
                obj: {message: 'no solution'}
            });
        }

        doc.pages = req.body.pages;
        doc.save(function(err, result){
            if(err){
                return res.status(404).json({
                    title: 'An error occurred',
                    obj: err
                });
            }

            res.status(200).json({
                title: 'success',
                obj: result
            });
        });
    });
});

//get all solutions by user
router.post('/list', function(req, res, next){
    Solution.find({userId: req.body.userId}, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'error',
                obj: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'no solutions',
                obj: {message: 'no solutions'}
            });
        }

        res.status(200).json({
            solutions: doc
        });
    });
});

//create solution
router.post('/create', function(req, res, next){
    var solution = new Solution({
        userId: req.body.userId,
        name: req.body.name,
        theme: req.body.theme,
        pages: req.body.pages,
    });
    console.log(req.body.pages);
    console.log(solution);
    solution.save(function(err, result){
        if(err){
            return res.status(404).json({
                title: 'An error occurred',
                obj: err
            });
        }

        res.status(200).json({
            title: 'Poslano',
            obj: result
        });
    });
});


module.exports = router;