import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Main } from "../../models/main";
import { MainLayoutTypes } from "../../../shared/enums";

@Component({
    selector: 'dip-main-two-columns',
    templateUrl: 'main-two-columns.component.html',
    styleUrls: ['main-two-columns.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainTwoColumnsComponent implements OnInit {
    @Input() main: Main;

    public tmpMain;
    public layoutTypes = MainLayoutTypes;

    constructor() { }

    ngOnInit() {
        this.tmpMain = {
            name: 'Main',
            float: false,
            theme_on: true
        }
    }

}