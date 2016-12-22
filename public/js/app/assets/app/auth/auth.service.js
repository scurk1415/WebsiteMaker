import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/rx";
import "rxjs/rx";
export var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.user = null;
    }
    AuthService.getUserId = function () {
        return localStorage.getItem('userId');
    };
    AuthService.prototype.getUser = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        return this._http.get('/authenticate/getUser/' + userId)
            .map(function (response) {
            _this.user = response.json().user;
            return _this.user;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.onSignUp = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.post('/authenticate', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.onSignIn = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.post('/authenticate/signin', body, { headers: headers })
            .map(function (response) {
            var data = response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.user = data.user;
            return data;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.updateUserPlan = function (assets) {
        var user = {
            id: localStorage.getItem('userId'),
            solutions: assets
        };
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.put('/authenticate/updatePlan', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error.json(); });
    };
    AuthService.prototype.onLogout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    /* helpers/validators */
    AuthService.prototype.isEmail = function (formControl) {
        if (!formControl.value.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
            return { noEmail: true };
        }
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
    ];
    return AuthService;
}());
