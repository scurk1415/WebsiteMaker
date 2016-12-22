import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Main } from "../models/main";
import { MainLayoutTypes } from "../../shared/enums";

@Component({
    selector: 'dip-main-style',
    templateUrl: 'main-style.component.html'
})
export class MainStyleComponent implements OnInit {
    @Input() main: Main;
    font_sizes = [];
    paddings = [];

    public layoutTypes = MainLayoutTypes;

    constructor() { }

    ngOnInit() {
        this.font_sizes = [
            { text: "Select size...", value: ""},
            { text: "14px", value: "14px"},
            { text: "18px", value: "18px"},
            { text: "22px", value: "22px"},
            { text: "24px", value: "24px"},
            { text: "30px", value: "30px"},
            { text: "36px", value: "36px"},
            { text: "48px", value: "48px"},
            { text: "72px", value: "72px"},
        ];
        this.paddings = [
            { text: "Select size...", value: ""},
            { text: "0", value: "0"},
            { text: "5px", value: "5px"},
            { text: "10px", value: "10px"},
            { text: "15px", value: "15px"},
            { text: "20px", value: "20px"},
            { text: "25px", value: "25px"},
            { text: "30px", value: "30px"},
            { text: "35px", value: "35px"},
            { text: "40px", value: "40px"},
            { text: "45px", value: "45px"},
            { text: "50px", value: "50px"},
        ];
    }
}