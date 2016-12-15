import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/rx";
import "rxjs/rx";
import {User} from "./user";
import {FormControl} from "@angular/forms";

@Injectable()
export class AuthService{
    public user : User = null;

    constructor(private _http: Http) { }

    static getUserId(){
        return localStorage.getItem('userId');
    }

    getUser(){
        const userId = localStorage.getItem('userId');
        return this._http.get('/authenticate/getUser/'+userId)
                        .map( response => {
                            this.user = response.json().user;
                            return this.user;
                        })
                        .catch( error => Observable.throw(error.json()));
    }

    onSignUp(user: User){
        var body = JSON.stringify(user);
        var headers = new Headers({'Content-type': 'application/json'});
        return this._http.post('/authenticate', body, { headers: headers })
                        .map(response => response.json())
                        .catch(error => Observable.throw(error.json()));
    }

    onSignIn(user: User){
        var body = JSON.stringify(user);
        var headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('/authenticate/signin', body, { headers: headers })
                        .map(response => {
                            let data = response.json();
                            localStorage.setItem('token', data.token);
                            localStorage.setItem('userId', data.userId);
                            this.user = data.user;
                            return data;
                        })
                        .catch(error => Observable.throw(error.json()));
    }

    updateUserPlan(assets: number){
        var user = {
            id: localStorage.getItem('userId'),
            solutions: assets
        };

        var body = JSON.stringify(user);
        var headers = new Headers({'Content-type': 'application/json'});

        return this._http.put('/authenticate/updatePlan', body, { headers: headers })
                        .map(response => response.json())
                        .catch(error => error.json());
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