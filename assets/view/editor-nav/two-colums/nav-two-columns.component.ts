import { Component, Input } from '@angular/core';
import { Nav } from "../../../app/editor/models/nav";

@Component({
    selector: 'dip-nav-two-columns',
    templateUrl: 'nav-two-columns.component.html',
    styleUrls: ['nav-two-columns.component.css']
})
export class NavTwoColumnsComponent {
    @Input() nav: Nav;
    @Input() pages;

    constructor() { }
}