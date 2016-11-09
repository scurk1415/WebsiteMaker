import {Component, OnInit, Input} from "@angular/core";
import { ControlViews } from "../../shared/enums";
import { Main } from "../models/main";

@Component({
    selector: 'dip-main-control',
    templateUrl: 'main-control.component.html'
})
export class MainControlComponent implements OnInit{

    @Input() main: Main;
    @Input() tmpMain: any;
    controlViews = ControlViews;

    ngOnInit() {
    }

}