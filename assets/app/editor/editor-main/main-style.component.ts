import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Main } from "../models/main";

@Component({
    selector: 'dip-main-style',
    templateUrl: 'main-style.component.html'
})
export class MainStyleComponent implements OnInit {
    @Input() main: Main;

    constructor() { }

    ngOnInit() { }
    
}