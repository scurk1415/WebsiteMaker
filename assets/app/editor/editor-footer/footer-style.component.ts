import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Footer } from "../models/footer";

@Component({
    selector: 'dip-footer-style',
    templateUrl: 'footer-style.component.html'
})
export class FooterStyleComponent implements OnInit {
    @Input() footer: Footer;
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
            { text: "21px", value: "21px"},
            { text: "22px", value: "22px"},
            { text: "23px", value: "23px"},
            { text: "24px", value: "24px"},
            { text: "25px", value: "25px"},
        ];
    }

    onTitleSizeChange(event){
        this.footer.title_size = event;
    }

    onFontSizeChange(event){
        this.footer.font_size = event;
    }
}