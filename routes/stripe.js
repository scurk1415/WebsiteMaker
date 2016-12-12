var express = require('express');
var stripe = require('stripe')("sk_test_C5eKRxiW2uAwJJU8gSi6WsSC");

var router = express.Router();

router.post('/', function(req, res, next) {

    var token = req.body.token_id;
    var amount = req.body.amount;
    var charge = stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: token,
        },
        function(err, charge){
            if(err){
                return res.status(404).json({
                    title: 'Error',
                    obj: err
                });
            }
            res.status(200).json({
                title: 'Payment done',
                obj: charge
            });
        }
    );
});


module.exports = router;