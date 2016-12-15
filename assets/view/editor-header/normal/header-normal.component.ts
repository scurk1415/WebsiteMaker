import { Component, Input } from '@angular/core';
import { Header } from "../../../app/editor/models/header";

@Component({
    selector: 'dip-header-normal',
    templateUrl: 'header-normal.component.html'
})
export class HeaderNormalComponent {
    @Input() header: Header;

    constructor() { }

}