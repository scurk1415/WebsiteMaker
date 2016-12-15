import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../../models/main";
import { MainLayoutTypes } from "../../../../shared/enums";

@Component({
    selector: 'dip-main-scroll',
    templateUrl: 'main-scroll.component.html',
    styleUrls: ['main-scroll.component.css']
})
export class MainScrollComponent implements OnInit {
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