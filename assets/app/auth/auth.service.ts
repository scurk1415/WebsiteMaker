import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/rx";
import "rxjs/rx";
import {User} from "./user";
import {FormControl} from "@angular/forms";

@Injectable()
export class AuthService{

    constructor(private _http: Http) { }

    static getUserId(){
        return localStorage.getItem('userId');
    }

    onSignUp(user: User){
        var body = JSON.stringify(user);
        var headers = new Headers({'Content-type': 'application/json'});
        return this._http.post('http://localhost:3000/authenticate', body, { headers: headers })
                        .map(response => response.json())
                        .catch(error => Observable.throw(error.json()));
    }

    onSignIn(user: User){
        var body = JSON.stringify(user);
        var headers = new Headers({'Content-type': 'application/json'});
        return this._http.post('http://localhost:3000/authenticate/signin', body, { headers: headers })
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    onLogout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

    /* helpers/validators */
    isEmail(formControl: FormControl) : {[s: string] : boolean}{
        if(!formControl.value.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)){
            return {noEmail: true};
        }
    }
}