import { Component, OnInit, Input } from '@angular/core';
import { Header } from "../models/header";

@Component({
    selector: 'dip-header-style',
    templateUrl: 'header-style.component.html'
})
export class HeaderStyleComponent implements OnInit {
    @Input() header: Header;

    constructor() { }

    ngOnInit() { }
    
}