import {Component, OnInit, Input} from "@angular/core";
import {Footer} from "../models/footer";

@Component({
    selector: 'dip-editor-footer',
    templateUrl: './editor-footer.component.html'
})
export class EditorFooterComponent implements OnInit {
    @Input() public footer: Footer;

    constructor() { }

    ngOnInit() { }

}