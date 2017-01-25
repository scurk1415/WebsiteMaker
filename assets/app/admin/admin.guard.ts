import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AdminGuard implements CanActivate{
    constructor(private _authSvc: AuthService, private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        // if logged in then proceed
        if(this._authSvc.isSuperAdmin()){
            return true;
        }

        //else redirect to login
        this._router.navigate(['']);
        return false;
    }

}