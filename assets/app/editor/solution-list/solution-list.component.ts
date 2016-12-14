import { Component, OnInit } from "@angular/core";
import {EditorService} from "../editor.service";
import {Solution} from "../models/solution";
import { User } from "../../auth/user";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'dip-solution-list',
    templateUrl: './solution-list.component.html'
})
export class SolutionListComponent implements OnInit {

    public solutions: Solution[] = [];
    public user: User;

    constructor(private _editorSvc: EditorService, private _authSvc: AuthService) { }

    ngOnInit() {
        //get solutions by user
        this._editorSvc.getSolutions().subscribe(
            response => {
                this.solutions = response
            },
            error => console.log('error component')
        );

        //if user is loaded in service
        if (this._authSvc.user){
            this.user = this._authSvc.user;
        }
        else{
            //get user data
            this._authSvc.getUser().subscribe(
                response => {
                    this.user = response;
                },
                error => console.log(error)
            );
        }
    }

    deleteSolution(solution: Solution){
        this._editorSvc.deleteSolution(solution).subscribe(
            response => {
                console.log("dela");
            },
            error => console.log(error)
        );
    }
}