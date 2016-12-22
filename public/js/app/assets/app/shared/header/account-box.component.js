import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
export var AccountBoxComponent = (function () {
    function AccountBoxComponent(_authSvc, _router) {
        this._authSvc = _authSvc;
        this._router = _router;
        this.showOptions = false;
    }
    AccountBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authSvc.user) {
            this.account = this._authSvc.user;
        }
        else {
            this._authSvc.getUser().subscribe(function (data) { return _this.account = data; }, function (err) { return console.log(err); });
        }
    };
    AccountBoxComponent.prototype.logOut = function () {
        this._authSvc.onLogout();
        this._router.navigate(['/']);
    };
    AccountBoxComponent.prototype.toggleOptions = function () {
        this.showOptions = !this.showOptions;
    };
    AccountBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-account-box',
                    templateUrl: 'account-box.component.html',
                    styleUrls: ['account-box.component.css']
                },] },
    ];
    /** @nocollapse */
    AccountBoxComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return AccountBoxComponent;
}());
