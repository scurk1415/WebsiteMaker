import { Component, OnInit, Input } from '@angular/core';
import { ControlViews } from "../../shared/enums";

@Component({
    selector: 'dip-control-header',
    templateUrl: 'control-header.component.html',
    styleUrls: ['control-header.component.css']
})
export class ControlHeaderComponent implements OnInit {

    @Input() control: any;
    controlViews = ControlViews;

    constructor() { }

    ngOnInit() {
        this.control.selection = this.controlViews.Edit;
    }

}