import { Component, Input } from '@angular/core';
import { Nav, NavItem } from "../../../app/editor/models/nav";
import { AppService } from "../../app.service";

@Component({
    selector: 'dip-nav-two-columns',
    templateUrl: 'nav-two-columns.component.html',
    styleUrls: ['nav-two-columns.component.css']
})
export class NavTwoColumnsComponent {
    @Input() nav: Nav;
    @Input() pages;

    constructor(private _appSvc : AppService) { }

    onPageChange(item: NavItem){
        this._appSvc.onPageChange(item)
    }
}