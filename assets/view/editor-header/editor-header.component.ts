import { Component, Input } from "@angular/core";
import { Header } from "../../app/editor/models/header";

@Component({
    selector: 'dip-editor-header',
    templateUrl: 'editor-header.component.html'
})
export class EditorHeaderComponent {
    @Input() header: Header;
    @Input() theme: Number;

    constructor() { }
}