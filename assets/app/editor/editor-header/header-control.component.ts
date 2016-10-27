import {Component, OnInit, Input} from "@angular/core";
import {Header} from "../models/header";

@Component({
    selector: 'dip-header-control',
    templateUrl: './header-control.component.html'
})
export class HeaderControlComponent implements OnInit {
    @Input() header: Header;
    @Input() tmpHeader: any;

    constructor() {
    }

    ngOnInit() { }

}