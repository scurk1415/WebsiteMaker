import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private _authSvc: AuthService, private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        // if logged in then proceed
        if(this._authSvc.isLoggedIn()){
            return true;
        }
        //else redirect to login
        this._router.navigate(['auth','login']);
        return false;
    }

}