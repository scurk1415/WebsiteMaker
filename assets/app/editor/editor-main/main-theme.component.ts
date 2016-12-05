import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../models/main";

@Component({
    selector: 'dip-main-theme',
    templateUrl: 'main-theme.component.html'
})
export class MainThemeComponent implements OnInit {

    @Input() main: Main;
    @Input() tmpMain: any;

    constructor() { }

    ngOnInit() { }
    
}