import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { User } from "../../auth/user";
let md5 = require('md5');

@Component({
    selector: 'dip-account-box',
    templateUrl: 'account-box.component.html',
    styleUrls: ['account-box.component.css']
})
export class AccountBoxComponent implements OnInit{
    public account: User;
    public showOptions: boolean = false;
    constructor(private _authSvc: AuthService, private _router: Router){}

    ngOnInit(){
        if(this._authSvc.user){
            this.account = this._authSvc.user
        }
        else {
            this._authSvc.getUser().subscribe(
                data => this.account = data,
                err => console.log(err)
            );
        }
    }

    logOut(){
        this._authSvc.onLogout();
        this._router.navigate(['/']);
    }

    toggleOptions(){
        this.showOptions = !this.showOptions;
    }
}