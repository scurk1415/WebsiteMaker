import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Main } from "../../models/main";
import { MainLayoutTypes } from "../../../shared/enums";

@Component({
    selector: 'dip-main-normal',
    templateUrl: 'main-normal.component.html',
    styleUrls: ['main-normal.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainNormalComponent implements OnInit {
    @Input() main: Main;

    public tmpMain : any;

    public layoutTypes = MainLayoutTypes;

    constructor() { }

    ngOnInit() {
        this.tmpMain = {
            showControl: false,
            name: 'Main',
            showOverlay: true,
            float: false,
            theme_on: true
        }
    }

}