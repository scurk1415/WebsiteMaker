import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { NavActionTypes } from "../app/shared/enums";
export var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
        this.changePage = new EventEmitter();
        this.nav_action_types = NavActionTypes;
    }
    AppService.prototype.getSolutionById = function (uid) {
        var body = JSON.stringify({ uid: uid });
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.post('/solution/', body, { headers: headers })
            .map(function (response) {
            return response.json().solution;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AppService.prototype.onPageChange = function (item) {
        if (item.action_type == this.nav_action_types.Url) {
            window.location.href = item.action;
        }
        else if (item.action_type == this.nav_action_types.AppPage) {
            this.changePage.emit(item.page);
        }
    };
    AppService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppService.ctorParameters = [
        { type: Http, },
    ];
    return AppService;
}());
