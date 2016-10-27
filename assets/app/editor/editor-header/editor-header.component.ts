import {Component, OnInit, Input} from "@angular/core";
import {Header} from "../models/header";

@Component({
    selector: 'dip-editor-header',
    templateUrl: './editor-header.component.html'
})
export class EditorHeaderComponent implements OnInit {
    @Input() header: Header;
    public tmpHeader = { showControl: false};

    constructor() { }

    ngOnInit() { }
    
}