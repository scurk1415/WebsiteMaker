import { Component, OnInit, Input, NgZone } from "@angular/core";
import {Header} from "../models/header";
import { ControlViews } from "../../shared/enums";

@Component({
    selector: 'dip-header-control',
    templateUrl: 'header-control.component.html'
})
export class HeaderControlComponent implements OnInit {
    @Input() header: Header;
    @Input() tmpHeader: any;

    private options: Object;
    controlViews = ControlViews;
    font_sizes = [];

    constructor() {
    }


    ngOnInit() {
        this.options = {
            url: 'http://localhost:10050/upload'
        };

        this.font_sizes = [
            { text: "Select font size...", value: ""},
            { text: "18px", value: "18px"},
            { text: "24px", value: "24px"},
            { text: "28px", value: "28px"},
            { text: "36px", value: "36px"},
            { text: "42px", value: "42px"},
            { text: "50px", value: "50px"},
            { text: "60px", value: "60px"},
            { text: "72px", value: "72px"},
            { text: "100px", value: "100px"}
        ];
    }

    onFileUploaded(file){
        this.header.logo = file;
    }

    /*handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.header.logo = data[0];
        }
    }*/
}