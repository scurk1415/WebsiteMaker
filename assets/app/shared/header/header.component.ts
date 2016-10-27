import {Component} from "@angular/core";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'dip-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor(private _authSvc: AuthService, private _router:Router) { }

    isLoggedIn(){
        return this._authSvc.isLoggedIn();
    }
}