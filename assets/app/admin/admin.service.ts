import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/rx";
import "rxjs/rx";

@Injectable()
export class AdminService {

    constructor(private _http: Http) { }

    getAllUsers(){
        return this._http.get('/adminidata/getUsers/')
        .map( response => {
            return response.json();
        })
        .catch( error => Observable.throw(error.json()));
    }

    getAllSolutions(){
        return this._http.get('/adminidata/getSolutions/')
        .map( response => {
            return response.json();
        })
        .catch( error => Observable.throw(error.json()));
    }
}