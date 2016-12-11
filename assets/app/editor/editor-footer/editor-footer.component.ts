import {Component, OnInit, Input} from "@angular/core";
import {Footer} from "../models/footer";
import { SolutionThemes } from "../../shared/enums";

@Component({
    selector: 'dip-editor-footer',
    templateUrl: 'editor-footer.component.html'
})
export class EditorFooterComponent implements OnInit {
    @Input() public footer: Footer;
    @Input() theme: Number;


    public tmpFooter= {};

    constructor() { }

    ngOnInit() {
        this.tmpFooter = {
            showControl: false,
            name: "Footer"
        }
    }
}