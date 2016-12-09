import {Component, OnInit, Input} from "@angular/core";
import { Nav, NavItem } from "../models/nav";
import { ControlViews, NavActionTypes } from "../../shared/enums";
import { SelectListItem } from "../../shared/controls/select-list-item";

@Component({
    selector: 'dip-nav-control',
    templateUrl: 'nav-control.component.html'
})
export class NavControlComponent implements OnInit{

    @Input() nav: Nav;
    @Input() pages;
    @Input() tmpNav: any;
    controlViews = ControlViews;
    navActionTypes = NavActionTypes;
    public action_types: Array<SelectListItem> = [];

    public edit: Array<boolean> = new Array();


    ngOnInit() {
        if(!this.nav.menu){
            this.nav.menu = [];
        }

        this.action_types = [
            { text: "Url", value: this.navActionTypes.Url},
            { text: "App page", value: this.navActionTypes.AppPage}
        ];
    }

    addItem(){
        var item = new NavItem("Link");
        item.action_type == this.navActionTypes.Url;

        this.nav.menu.push(item);
    }

    deleteItem(item){
        var index = this.nav.menu.indexOf(item);
        this.nav.menu.splice(index,1);
    }

    onActionTypeSelect(event: Number, item: NavItem){
        item.action_type = event;
    }
}