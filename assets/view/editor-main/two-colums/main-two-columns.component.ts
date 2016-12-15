import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Main } from "../../../app/editor/models/main";
import { MainLayoutTypes } from "../../../app/shared/enums";

@Component({
    selector: 'dip-main-two-columns',
    templateUrl: 'main-two-columns.component.html',
    styleUrls: ['main-two-columns.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainTwoColumnsComponent {
    @Input() main: Main;
    public layoutTypes = MainLayoutTypes;

    constructor() { }

}