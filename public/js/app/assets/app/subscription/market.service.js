import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/rx";
export var MarketService = (function () {
    function MarketService(_http) {
        this._http = _http;
        this.plans = [
            {
                name: 'Basic',
                price: 1000,
                solutions: 2
            },
            {
                name: 'Business',
                price: 3000,
                solutions: 10
            },
            {
                name: 'Enterprise',
                price: 12000,
                solutions: 50
            }
        ];
    }
    MarketService.prototype.chargeCard = function (cardData) {
        var body = JSON.stringify(cardData);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.post('http://localhost:3000/checkout', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error.json(); });
    };
    MarketService.prototype.getPlans = function () {
        return this.plans;
    };
    MarketService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MarketService.ctorParameters = [
        { type: Http, },
    ];
    return MarketService;
}());
