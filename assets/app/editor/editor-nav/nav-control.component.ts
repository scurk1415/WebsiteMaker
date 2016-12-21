import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Nav, NavItem } from "../models/nav";
import { ControlViews, NavActionTypes } from "../../shared/enums";
import { SelectListItem } from "../../shared/controls/select-list-item";
import { EditorService } from "../editor.service";

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
    public solution_pages: Array<SelectListItem> = [];

    public edit: Array<boolean> = new Array();

    constructor(private _editorSvc: EditorService){}

    ngOnInit() {
        if(!this.nav.menu){
            this.nav.menu = [];
        }

        this.action_types = [
            { text: "Url", value: this.navActionTypes.Url},
            { text: "App page", value: this.navActionTypes.AppPage}
        ];

        this._editorSvc.pageAddedDeleted.subscribe(
            data => {
                this.pages = data;
                this.onPagesChange();
            }
        );

        this.onPagesChange();
    }

    onPagesChange(){
        this.solution_pages = [];
        this.solution_pages.push(new SelectListItem("Select page", ""));
        for (let i = 0; i< this.pages.length; i++){
            let item = new SelectListItem(this.pages[i].name, i);
            this.solution_pages.push(item);
        }
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
}