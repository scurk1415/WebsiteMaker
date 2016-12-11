import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../models/main";
import { MainLayoutTypes } from "../../../shared/enums";

@Component({
    selector: 'dip-main-normal',
    templateUrl: 'main-normal.component.html'
})
export class MainNormalComponent implements OnInit {
    @Input() main: Main;

    public tmpMain= {};

    public layoutTypes = MainLayoutTypes;

    constructor() { }

    ngOnInit() { }

}