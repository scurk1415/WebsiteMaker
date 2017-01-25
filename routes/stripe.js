let stripe = require('stripe')("sk_test_C5eKRxiW2uAwJJU8gSi6WsSC");

let express = require('express');
let router = express.Router();

router.post('/', function(req, res, next) {
    let token = req.body.token_id;
    let amount = req.body.amount;
    //stripe = object generated with our secret key
    let charge = stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: token,
        },
        function(err, charge){
            if(err){
                return res.status(404).json({
                    title: 'Something went wrong',
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