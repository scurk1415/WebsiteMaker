import { Component, Input } from '@angular/core';
import { Nav, NavItem } from "../../../app/editor/models/nav";
import { AppService } from "../../app.service";

@Component({
    selector: 'dip-nav-normal',
    templateUrl: 'nav-normal.component.html',
    styleUrls: ['nav-normal.component.css']
})
export class NavNormalComponent {
    @Input() nav: Nav;
    @Input() pages;

    constructor(private _appSvc : AppService) { }

    onPageChange(item: NavItem){
        this._appSvc.onPageChange(item);
    }
}