import {Component, OnInit, Input} from "@angular/core";
import { ControlViews } from "../../shared/enums";
import { Footer } from "../models/footer";

@Component({
    selector: 'dip-footer-control',
    templateUrl: 'footer-control.component.html'
})
export class FooterControlComponent implements OnInit{

    @Input() footer: Footer;
    @Input() tmpFooter: any;
    controlViews = ControlViews;

    ngOnInit() {
    }

}