import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Main } from "../models/main";

@Component({
    selector: 'dip-main-style',
    templateUrl: 'main-style.component.html'
})
export class MainStyleComponent implements OnInit {
    @Input() main: Main;
    font_sizes = [];

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
        ];
    }

    onTitleSizeSelect(event){
        this.main.title_size = event;
    }

    onDescriptionSizeSelect(event){
        this.main.description_size = event;
    }
}