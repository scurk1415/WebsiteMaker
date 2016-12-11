import { Component, OnInit, Input } from '@angular/core';
import { Header } from "../../models/header";

@Component({
    selector: 'dip-header-normal',
    templateUrl: 'header-normal.component.html'
})
export class HeaderNormalComponent implements OnInit {
    @Input() header: Header;

    public tmpHeader= {
        showControl: false,
        name: "Header"
    };

    constructor() { }

    ngOnInit() { }

}