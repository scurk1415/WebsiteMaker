import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { User } from "./user";
import { ErrorService } from "../error/error.service";
export var LoginComponent = (function () {
    function LoginComponent(_fb, _authSvc, _router, _errorSvc) {
        this._fb = _fb;
        this._authSvc = _authSvc;
        this._router = _router;
        this._errorSvc = _errorSvc;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            email: ['', Validators.compose([
                    Validators.required,
                    this._authSvc.isEmail
                ])],
            password: ['', Validators.required]
        });
    };
    /**
     * resolves the userId value so that the IDE doesnt mak it as unresolved (WebStorm IDE)
     * @param data.userId   Information about the object's members.
     */
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.loginForm.value.email, this.loginForm.value.password);
        this._authSvc.onSignIn(user).subscribe(function (data) {
            _this._router.navigateByUrl('/');
        }, function (error) { return _this._errorSvc.handleError(error); });
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-login',
                    templateUrl: './login.component.html'
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: FormBuilder, },
        { type: AuthService, },
        { type: Router, },
        { type: ErrorService, },
    ];
    return LoginComponent;
}());
