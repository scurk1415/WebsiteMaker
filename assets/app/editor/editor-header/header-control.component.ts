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
    //private response: any = {};
    controlViews = ControlViews;

    constructor() {
    }


    ngOnInit() {
        this.options = {
            url: 'http://localhost:10050/upload'
        };
    }

    onFileUploaded(file){
        console.log(file);
        this.header.logo = file;
    }

    /*handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.header.logo = data[0];
        }
    }*/
}