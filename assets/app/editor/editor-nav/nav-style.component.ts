import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Nav } from "../models/nav";

@Component({
    selector: 'dip-nav-style',
    templateUrl: 'nav-style.component.html'
})
export class NavStyleComponent implements OnInit {
    @Input() nav: Nav;
    font_sizes = [];

    constructor() { }

    ngOnInit() {
        this.font_sizes = [
            { text: "Select font size...", value: ""},
            { text: "12px", value: "12px"},
            { text: "13px", value: "13px"},
            { text: "14px", value: "14px"},
            { text: "15px", value: "15px"},
            { text: "16px", value: "16px"},
            { text: "17px", value: "17px"},
            { text: "18px", value: "18px"},
            { text: "19px", value: "19px"},
            { text: "20px", value: "20px"},
        ];
    }

    onFontSizeSelect(event){
        this.nav.font_size = event;
    }
}