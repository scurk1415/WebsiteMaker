import { Component, OnInit, Input } from '@angular/core';
import { Nav } from "../../models/nav";

@Component({
    selector: 'dip-nav-two-columns',
    templateUrl: 'nav-two-columns.component.html',
    styleUrls: ['nav-two-columns.component.css']
})
export class NavTwoColumnsComponent implements OnInit {
    @Input() nav: Nav;
    @Input() pages;

    public tmpNav = {
        showControl: false,
        name: "Nav",
        float: true,
        disableDock: true,
        dragPosition:{
            left: '300px',
            top: '50px'
        }
    };
    constructor() { }

    ngOnInit() {
    }
    
}