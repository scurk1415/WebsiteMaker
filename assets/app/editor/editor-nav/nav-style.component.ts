import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Nav } from "../models/nav";

@Component({
    selector: 'dip-nav-style',
    templateUrl: 'nav-style.component.html'
})
export class NavStyleComponent implements OnInit {
    @Input() nav: Nav;

    constructor() { }

    ngOnInit() { }
    
}