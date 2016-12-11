import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../models/main";

@Component({
    selector: 'dip-main-two-columns',
    templateUrl: 'main-two-columns.component.html',
    styleUrls: ['main-two-columns.component.css']
})
export class MainTwoColumnsComponent implements OnInit {
    @Input() main: Main;

    public tmpMain = {
        name: 'Main',
        float: true
    };

    constructor() { }

    ngOnInit() {
    }

}