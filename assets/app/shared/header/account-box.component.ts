import {Component} from "@angular/core";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'dip-account-box',
    templateUrl: 'account-box.component.html'
})
export class AccountBoxComponent {
    //@Input() account: User;
    public showOptions: boolean = false;
    constructor(private _authSvc: AuthService, private _router: Router){}

    logOut(){
        this._authSvc.onLogout();
        this._router.navigate(['/']);
    }

    toggleOptions(){
        this.showOptions = !this.showOptions;
    }
}