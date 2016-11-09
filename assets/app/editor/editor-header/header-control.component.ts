import {Component, OnInit, Input} from "@angular/core";
import {Header} from "../models/header";
import { ControlViews } from "../../shared/enums";

@Component({
    selector: 'dip-header-control',
    templateUrl: './header-control.component.html'
})
export class HeaderControlComponent implements OnInit {
    @Input() header: Header;
    @Input() tmpHeader: any;

    controlViews = ControlViews;

    constructor() {
    }

    ngOnInit() { }

}