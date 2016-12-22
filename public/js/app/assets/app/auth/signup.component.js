import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { ErrorService } from "../error/error.service";
import { User } from "./user";
import { Router } from "@angular/router";
export var SignupComponent = (function () {
    function SignupComponent(_fb, _authSvc, _errorSvc, _router) {
        this._fb = _fb;
        this._authSvc = _authSvc;
        this._errorSvc = _errorSvc;
        this._router = _router;
    }
    ;
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = this._fb.group({
            email: ['', Validators.compose([
                    Validators.required,
                    this._authSvc.isEmail
                ])],
            password: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(6)
                ])],
            confirmPassword: ['', Validators.compose([
                    Validators.required,
                    this.isEqualPassword.bind(this)
                ])],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this._authSvc.onSignUp(this.signUpForm.value).subscribe(function (data) {
            //sign in after signup is done
            var user = new User(_this.signUpForm.value.email, _this.signUpForm.value.password);
            _this._authSvc.onSignIn(user).subscribe(function (data) {
                _this._router.navigateByUrl('/');
            }, function (error) { return _this._errorSvc.handleError(error); });
        }, function (error) { return _this._errorSvc.handleError(error); });
    };
    SignupComponent.prototype.isEqualPassword = function (formControl) {
        if (!this.signUpForm) {
            return { noMatch: true };
        }
        if (formControl.value !== this.signUpForm.controls['password'].value) {
            return { noMatch: true };
        }
    };
    SignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-signup',
                    templateUrl: './signup.component.html'
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = [
        { type: FormBuilder, },
        { type: AuthService, },
        { type: ErrorService, },
        { type: Router, },
    ];
    return SignupComponent;
}());
