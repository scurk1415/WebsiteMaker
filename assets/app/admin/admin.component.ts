import { Component, OnInit } from '@angular/core';
import { User } from "../auth/user";
import { AdminService } from "./admin.service";
import { Solution } from "../editor/models/solution";

@Component({
    selector: 'dip-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit {
    public users: User[] = [];
    public solutions: Solution[] = [];
    public edit: Array<boolean> = new Array();

    constructor(public _adminSvc: AdminService) { }

    ngOnInit() {
         this._adminSvc.getAllUsers().subscribe(
             data => this.users = data.users,
             error => console.log(error)
         );

        this._adminSvc.getAllSolutions().subscribe(
            data => this.solutions = data.solutions,
            error => console.log(error)
        );
    }
}