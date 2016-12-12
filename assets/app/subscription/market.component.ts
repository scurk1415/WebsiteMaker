import { Component, OnInit, Renderer, OnDestroy } from "@angular/core";
import { MarketService } from "./market.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user";

@Component({
    selector: 'dip-market',
    templateUrl: 'market.component.html',
    styleUrls: ['market.component.css']
})
export class MarketComponent implements OnInit, OnDestroy {
    globalListener: any;
    public isLoggedIn: boolean;
    public plans = [];

    constructor(private _markerSvc: MarketService, private renderer: Renderer, private _router: Router, private _authSvc: AuthService) { }

    ngOnInit() {
        this.plans = this._markerSvc.getPlans();
        this.isLoggedIn = this._authSvc.isLoggedIn();

        //this is a hack that prevents checkout.js from throwing an error because of zone.js has wrapped the callback with zone information.
        const _stringify = JSON.stringify;
        JSON.stringify = function (value, ...args) {
            if (args.length) {
                //return _stringify(value, ...args);
            } else {
                return _stringify(value, function (key, value) {
                    if (value && key === 'zone' && value['_zoneDelegate']
                        && value['_zoneDelegate']['zone'] === value) {
                        return undefined;
                    }
                    return value;
                });
            }
        };
    }

    openCheckout(value: number, assets: number) {
        let self = this;

        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_4s9nCEVf4AlsjUQieGfE1Ayb',
            locale: 'auto',
            token: function (token: any) {
                // When user enters all the card data create a payment
                const data = {
                    token_id: token.id,
                    amount: value
                };

                self._markerSvc.chargeCard(data).subscribe(
                    data => {
                        self._authSvc.updateUserPlan(assets).subscribe(
                            data => self._router.navigateByUrl( '/' ),
                            error => console.error(error)
                        );

                    },
                    err => console.error(err)
                );
            }
        });

        //open stripe checkout popup
        handler.open({
            name: 'Diploma',
            description: 'Buy plan',
            amount: value
        });

        this.globalListener = this.renderer.listenGlobal('window', 'popstate', () => {
            handler.close();
        });
    }

    ngOnDestroy(): void {
        if(this.globalListener){
            this.globalListener();
        }
    }
}