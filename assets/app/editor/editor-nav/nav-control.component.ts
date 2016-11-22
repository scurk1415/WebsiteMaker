import {Component, OnInit, Input} from "@angular/core";
import { Nav, NavItem } from "../models/nav";
import { ControlViews } from "../../shared/enums";

@Component({
    selector: 'dip-nav-control',
    templateUrl: 'nav-control.component.html'
})
export class NavControlComponent implements OnInit{

    @Input() nav: Nav;
    @Input() tmpNav: any;
    controlViews = ControlViews;

    public edit: Array<boolean> = new Array();


    ngOnInit() {
        if(!this.nav.menu){
            this.nav.menu = [];
        }
    }

    addItem(){
        var item = new NavItem("Link");
        this.nav.menu.push(item);
    }

    deleteItem(item){
        var index = this.nav.menu.indexOf(item);
        this.nav.menu.splice(index,1);
    }
}