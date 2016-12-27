import { Component, OnInit, Input } from '@angular/core';
import { Header } from "../../models/header";

@Component({
    selector: 'dip-header-normal',
    templateUrl: 'header-normal.component.html',
    styleUrls: ['header-normal.component.css']
})
export class HeaderNormalComponent implements OnInit {
    @Input() header: Header;

    public tmpHeader= {
        showControl: false,
        name: "Header",
        showOverlay: false
    };

    constructor() { }

    ngOnInit() { }

}