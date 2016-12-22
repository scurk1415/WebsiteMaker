import { Component, Renderer } from "@angular/core";
import { MarketService } from "./market.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
export var MarketComponent = (function () {
    function MarketComponent(_markerSvc, renderer, _router, _authSvc) {
        this._markerSvc = _markerSvc;
        this.renderer = renderer;
        this._router = _router;
        this._authSvc = _authSvc;
        this.plans = [];
    }
    MarketComponent.prototype.ngOnInit = function () {
        this.plans = this._markerSvc.getPlans();
        this.isLoggedIn = this._authSvc.isLoggedIn();
    };
    MarketComponent.prototype.openCheckout = function (value, assets) {
        var self = this;
        //this is a hack that prevents checkout.js from throwing an error because of zone.js has wrapped the callback with zone information.
        var _stringify = JSON.stringify;
        JSON.stringify = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (args.length) {
                // return _stringify(value, ...args);
                return _stringify(value, args);
            }
            else {
                return _stringify(value, function (key, value) {
                    if (value && key === 'zone' && value['_zoneDelegate']
                        && value['_zoneDelegate']['zone'] === value) {
                        return undefined;
                    }
                    return value;
                });
            }
        };
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_4s9nCEVf4AlsjUQieGfE1Ayb',
            locale: 'auto',
            token: function (token) {
                // When user enters all the card data create a payment
                var data = {
                    token_id: token.id,
                    amount: value
                };
                self._markerSvc.chargeCard(data).subscribe(function (data) {
                    self._authSvc.updateUserPlan(assets).subscribe(function (data) { return self._router.navigateByUrl('/'); }, function (error) { return console.error(error); });
                }, function (err) { return console.error(err); });
            }
        });
        //open stripe checkout popup
        handler.open({
            name: 'Diploma',
            description: 'Buy plan',
            amount: value
        });
        this.globalListener = this.renderer.listenGlobal('window', 'popstate', function () {
            handler.close();
        });
    };
    MarketComponent.prototype.ngOnDestroy = function () {
        if (this.globalListener) {
            this.globalListener();
        }
    };
    MarketComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-market',
                    templateUrl: 'market.component.html',
                    styleUrls: ['market.component.css']
                },] },
    ];
    /** @nocollapse */
    MarketComponent.ctorParameters = [
        { type: MarketService, },
        { type: Renderer, },
        { type: Router, },
        { type: AuthService, },
    ];
    return MarketComponent;
}());
