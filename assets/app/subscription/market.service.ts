import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/rx";

@Injectable()
export class MarketService {

    public plans = [
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

    constructor(private _http: Http) { }

    chargeCard(cardData: any){
        const body = JSON.stringify(cardData);
        const headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('http://localhost:3000/checkout',body, {headers : headers})
                        .map(response => response.json())
                        .catch(error => error.json());
    }

    getPlans(){
        return this.plans;
    }
}