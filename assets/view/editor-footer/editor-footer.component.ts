import {Component, Input} from "@angular/core";
import { Footer } from "../../app/editor/models/footer";

@Component({
    selector: 'dip-editor-footer',
    templateUrl: 'editor-footer.component.html'
})
export class EditorFooterComponent{
    @Input() public footer: Footer;
    @Input() theme: Number;

    constructor() { }
}