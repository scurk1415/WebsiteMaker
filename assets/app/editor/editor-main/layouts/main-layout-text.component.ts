import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../models/main";
import { MainLayoutTypes, FormTypes } from "../../../shared/enums";

@Component({
    selector: 'dip-main-layout-text',
    templateUrl: 'main-layout-text.component.html',
    styleUrls: ['main-layout-text.component.css']
})
export class MainLayoutTextComponent implements OnInit {
    @Input() main: Main;
    public layoutTypes = MainLayoutTypes;
    public form_types = FormTypes;

    constructor() { }

    ngOnInit() { }

}