import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user";
import {Router} from "@angular/router";
import {ErrorService} from "../error/error.service";

@Component({
    selector: 'dip-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private _fb:FormBuilder, private _authSvc: AuthService, private _router: Router, private _errorSvc: ErrorService) { }

    ngOnInit() { 
        this.loginForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this._authSvc.isEmail
            ])],
            password: ['', Validators.required]
        })
    }

    /**
     * resolves the userId value so that the IDE doesnt mak it as unresolved (WebStorm IDE)
     * @param data.userId   Information about the object's members.
     */
    onSubmit(){
        const user = new User(this.loginForm.value.email, this.loginForm.value.password);
        this._authSvc.onSignIn(user).subscribe(
            data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                this._router.navigateByUrl('/');
            },
            error => this._errorSvc.handleError(error)
        );
    }
}