import { Component, OnInit, Input } from '@angular/core';
import { Main } from "../../models/main";
import { FormTypes } from "../../../shared/enums";

@Component({
    selector: 'dip-main-layout-contact-form',
    templateUrl: 'main-layout-contact-form.component.html'
})
export class MainLayoutContactFormComponent implements OnInit {
    @Input() main: Main;

    public form_types = FormTypes;

    constructor() { }

    ngOnInit() { }

}