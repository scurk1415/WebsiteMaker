import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { NavItem } from "../app/editor/models/nav";
import { NavActionTypes } from "../app/shared/enums";

@Injectable()
export class AppService{
    public changePage = new EventEmitter();
    public nav_action_types = NavActionTypes;

    constructor(private _http: Http){}

    getSolutionById(uid: string){
        const body = JSON.stringify({uid: uid});
        const headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('/solution/', body, { headers })
                            .map( response => {
                                return response.json().solution;
                            })
                            .catch( error => Observable.throw(error.json()) )
    }

    onPageChange(item: NavItem){
        console.log(item);
        if (item.action_type == this.nav_action_types.Url){
            window.location.href = item.action;
        }
        else if(item.action_type == this.nav_action_types.AppPage){
            this.changePage.emit(item.page);
        }
    }
}