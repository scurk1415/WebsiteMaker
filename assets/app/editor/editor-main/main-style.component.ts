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
    private font_sizes = [];
    private paddings = [];

    public layoutTypes = MainLayoutTypes;

    constructor() { }

    ngOnInit() {
        this.font_sizes = [
            { text: "Select size...", value: ""},
            { text: "12px", value: "12px"},
            { text: "13px", value: "13px"},
            { text: "14px", value: "14px"},
            { text: "15px", value: "15px"},
            { text: "16px", value: "16px"},
            { text: "17px", value: "17px"},
            { text: "18px", value: "18px"},
            { text: "19px", value: "19px"},
            { text: "20px", value: "20px"},
            { text: "21px", value: "21px"},
            { text: "22px", value: "22px"},
            { text: "23px", value: "23px"},
            { text: "24px", value: "43px"},
            { text: "25px", value: "25px"},
            { text: "26px", value: "26px"},
            { text: "27px", value: "27px"},
            { text: "28px", value: "28px"},
            { text: "29px", value: "29px"},
            { text: "30px", value: "30px"},
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