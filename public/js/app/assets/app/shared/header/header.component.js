import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
export var HeaderComponent = (function () {
    function HeaderComponent(_authSvc, _router) {
        this._authSvc = _authSvc;
        this._router = _router;
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return this._authSvc.isLoggedIn();
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-header',
                    templateUrl: './header.component.html'
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return HeaderComponent;
}());
