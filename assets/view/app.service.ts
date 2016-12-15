import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppService{
    constructor(private _http: Http){}

    getSolutionById(uid: string){
        console.log(uid);
        const body = JSON.stringify({uid: uid});
        const headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('/solution/', body, { headers })
                            .map( response => {
                                return response.json().solution;
                            })
                            .catch( error => Observable.throw(error.json()) )
    }
}