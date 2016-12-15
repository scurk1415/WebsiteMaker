import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../../../app/editor/models/main";
import { MainLayoutTypes } from "../../../../app/shared/enums";

@Component({
    selector: 'dip-main-layout-scroll',
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