import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../../app/editor/models/main";

@Component({
    selector: 'dip-main-layout-one',
    templateUrl: 'main-layout-one.component.html'
})
export class MainLayoutOneComponent implements OnInit {
    @Input() main: Main;

    constructor() { }

    ngOnInit() { }

}