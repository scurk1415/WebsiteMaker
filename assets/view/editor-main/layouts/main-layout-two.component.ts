import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../../app/editor/models/main";

@Component({
    selector: 'dip-main-layout-two',
    templateUrl: 'main-layout-two.component.html'
})
export class MainLayoutTwoComponent implements OnInit {
    @Input() main: Main;

    constructor() { }

    ngOnInit() { }

}