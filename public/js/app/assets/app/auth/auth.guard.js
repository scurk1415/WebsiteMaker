import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
export var AuthGuard = (function () {
    function AuthGuard(_authSvc, _router) {
        this._authSvc = _authSvc;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // if logged in then proceed
        if (this._authSvc.isLoggedIn()) {
            return true;
        }
        //else redirect to login
        this._router.navigate(['auth', 'login']);
        return false;
    };
    AuthGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return AuthGuard;
}());
