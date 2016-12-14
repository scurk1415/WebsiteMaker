import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "./auth.service";
import {ErrorService} from "../error/error.service";
import { User } from "./user";
import { Router } from "@angular/router";

@Component({
    selector: 'dip-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    public signUpForm: FormGroup;

    constructor(private _fb:FormBuilder, private _authSvc: AuthService, private _errorSvc: ErrorService, private _router: Router) { };

    ngOnInit(): any {
        this.signUpForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this._authSvc.isEmail
            ])],
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])],
            confirmPassword:['', Validators.compose([
                Validators.required,
                this.isEqualPassword.bind(this)
            ])],
            firstName: ['', Validators.required],
            lastName:['', Validators.required]
        });
    }


    onSubmit(){
        this._authSvc.onSignUp(this.signUpForm.value).subscribe(
            data => {
                //sign in after signup is done

                const user = new User(this.signUpForm.value.email, this.signUpForm.value.password);
                this._authSvc.onSignIn(user).subscribe(
                    data => {
                        this._router.navigateByUrl('/');
                    },
                    error => this._errorSvc.handleError(error)
                );
            },
            error => this._errorSvc.handleError(error)
        );
    }

    isEqualPassword(formControl: FormControl) : {[s: string] : boolean}{
        if(!this.signUpForm){
            return {noMatch: true}
        }
        if(formControl.value !== this.signUpForm.controls['password'].value){
            return {noMatch: true};
        }
    }
}