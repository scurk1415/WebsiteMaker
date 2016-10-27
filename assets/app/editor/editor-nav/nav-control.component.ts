import {Component, OnInit, Input} from "@angular/core";
import {Nav, NavItem} from "../models/nav";

@Component({
    selector: 'dip-nav-control',
    templateUrl: 'nav-control.component.html'
})
export class NavControlComponent implements OnInit{

    @Input() nav: Nav;
    @Input() tmpNav: any;


    ngOnInit() {
        if(!this.nav.menu){
            this.nav.menu = [];
        }
    }

    addItem(){
        var item = {
            name: 'titula'
        };
        this.nav.menu.push(item);
    }

    deleteItem(item){
        console.log('ddd');
        var index = this.nav.menu.indexOf(item);
        this.nav.menu.splice(index,1);
    }
}