import {Component, OnInit, Input} from "@angular/core";
import {Main} from "../models/main";

@Component({
    selector: 'dip-editor-main',
    templateUrl: './editor-main.component.html'
})
export class EditorMainComponent implements OnInit {
    @Input() public main: Main;

    public tmpMain= {};

    constructor() { }

    ngOnInit() {
        this.tmpMain = {
            showControl: false,
            name: "Main",
            theme_on: true
        }
    }
    
}