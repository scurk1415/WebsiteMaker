import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../models/main";

@Component({
    selector: 'dip-main-layout-grid',
    templateUrl: 'main-layout-grid.component.html'
})
export class MainLayoutGridComponent implements OnInit {
    @Input() main: Main;

    constructor() { }

    ngOnInit() { }

}