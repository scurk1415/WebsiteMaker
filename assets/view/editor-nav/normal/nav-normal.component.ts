import { Component, Input } from '@angular/core';
import { Nav } from "../../../app/editor/models/nav";

@Component({
    selector: 'dip-nav-normal',
    templateUrl: 'nav-normal.component.html',
    styleUrls: ['nav-normal.component.css']
})
export class NavNormalComponent {
    @Input() nav: Nav;
    @Input() pages;

    constructor() { }
    
}