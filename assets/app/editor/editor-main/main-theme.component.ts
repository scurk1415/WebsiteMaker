import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../models/main";
import { MainLayoutTypes } from "../../shared/enums";

@Component({
    selector: 'dip-main-theme',
    templateUrl: 'main-theme.component.html'
})
export class MainThemeComponent implements OnInit {

    @Input() main: Main;

    public layoutTypes = MainLayoutTypes;

    constructor() { }

    ngOnInit() { }
    
}