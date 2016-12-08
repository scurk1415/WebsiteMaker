import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/rx";
import { Injectable, EventEmitter } from "@angular/core";
import { Solution } from "./models/solution";
import { Footer } from "./models/footer";
import { Header } from "./models/header";
import { Main } from "./models/main";
import { Nav } from "./models/nav";
import { Page } from "./models/page";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class EditorService{
    public solutionRetrieved = new EventEmitter<Solution>();
    public solutions: Solution[] = [];

    constructor(private _http: Http){}

    getSolutions(){
        let userId = localStorage.getItem('userId');
        var body = JSON.stringify({userId: userId});
        var headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('http://localhost:3000/solution/list',body, {headers:headers})
            .map( response => {
                let data = response.json().solutions;
                let solutions: Solution[] =[];
                for (let i = 0; i< data.length; i++){
                    solutions.push(data[i]);
                }
                this.solutions = solutions;

                return this.solutions;
            })
            .catch( error => Observable.throw(error.json()) )
    }

    getSolutionById(uid: string){
        if(this.solutions.length == 0 ){
            this.getSolutions().subscribe(
                (solutions: Solution[]) => {
                    let solution =  solutions.find(function(solution: any) {return solution._id === uid;});
                    this.solutionRetrieved.emit(solution);
                }
            );
        }
        else{
            return this.solutions.find(function(solution: any) {return solution._id === uid;});
        }
    }

    createSolution(name: string){
        const header = new Header();
        const footer = new Footer();
        const main = new Main();
        const nav = new Nav();
        const page = new Page(header,nav,main,footer)
        let pages = new Array<Page>();
        pages.push(page);

        const solution = new Solution(AuthService.getUserId(),name, pages);

        const body = JSON.stringify(solution);
        const headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('http://localhost:3000/solution/create', body, {headers:headers})
            .map( (response: Response) => {
                const data = response.json().obj;
                solution._id = data._id;
                console.log(this.solutions);
                this.solutions.push(solution);

                return solution;
            })
            .catch( error => Observable.throw(error.json()) );
    }

    deleteSolution(solution: Solution){
        this.solutions.splice(this.solutions.indexOf(solution), 1);
        return this._http.delete('http://localhost:3000/solution/'+ solution._id)
            .map( response => response.json())
            .catch( error => Observable.throw(error));
    }

    saveSolution(solution: Solution){
        console.log(solution);
        const body = JSON.stringify(solution);
        const headers = new Headers({'Content-type': 'application/json'});

        return this._http.put('http://localhost:3000/solution/'+ solution._id, body, {headers })
            .map( response => response.json())
            .catch( error => Observable.throw(error));
    }
}