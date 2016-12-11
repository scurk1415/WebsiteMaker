import { Component, OnInit, Input } from '@angular/core';
import { Nav } from "../../models/nav";

@Component({
    selector: 'dip-nav-normal',
    templateUrl: 'nav-normal.component.html',
    styleUrls: ['nav-normal.component.css']
})
export class NavNormalComponent implements OnInit {
    @Input() nav: Nav;
    @Input() pages;
    public tmpNav = {
        showControl: false,
        name: "Nav"
    };

    constructor() { }



    ngOnInit() { }
    
}