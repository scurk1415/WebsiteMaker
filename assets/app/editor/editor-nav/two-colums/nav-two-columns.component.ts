import { Component, OnInit, Input } from '@angular/core';
import { Nav } from "../../models/nav";

@Component({
    selector: 'dip-nav-two-columns',
    templateUrl: 'nav-two-columns.component.html',
    styleUrls: ['nav-two-columns.component.css']
})
export class NavTwoColumnsComponent implements OnInit {
    @Input() nav: Nav;
    @Input() tmpNav;
    @Input() pages;

    constructor() { }

    ngOnInit() {
        this.tmpNav.float = true;
    }
    
}