import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../models/main";

@Component({
    selector: 'dip-main-layout-rows',
    templateUrl: 'main-layout-rows.component.html'
})
export class MainLayoutRowsComponent implements OnInit {
    @Input() main: Main;

    constructor() { }

    ngOnInit() { }

}