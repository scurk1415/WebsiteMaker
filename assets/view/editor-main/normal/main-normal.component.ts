import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Main } from "../../../app/editor/models/main";
import { MainLayoutTypes } from "../../../app/shared/enums";

@Component({
    selector: 'dip-main-normal',
    templateUrl: 'main-normal.component.html',
    styleUrls: ['main-normal.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainNormalComponent {
    @Input() main: Main;

    public layoutTypes = MainLayoutTypes;

    constructor() { }
}