import { Component, OnInit, Input } from '@angular/core';
import { Header } from "../../models/header";

@Component({
    selector: 'dip-header-normal',
    templateUrl: 'header-normal.component.html'
})
export class HeaderNormalComponent implements OnInit {
    @Input() header: Header;
    @Input() tmpHeader;

    constructor() { }

    ngOnInit() { }

}