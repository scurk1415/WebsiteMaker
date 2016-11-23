import {Component, OnInit, Input} from "@angular/core";
import {Header} from "../models/header";
import { ControlViews } from "../../shared/enums";

@Component({
    selector: 'dip-header-control',
    templateUrl: './header-control.component.html'
})
export class HeaderControlComponent implements OnInit {
    @Input() header: Header;
    @Input() tmpHeader: any;

    uploadFile: any;
    hasBaseDropZoneOver: boolean = false;
    options: Object = {
        url: 'http://localhost:10050/upload'
    };
    controlViews = ControlViews;

    constructor() {
    }

    ngOnInit() { }

    handleUpload(data): void {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
            this.header.logo = "/uploaded/"+this.uploadFile[0].filename;
        }
    }

    fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

}