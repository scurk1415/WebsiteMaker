import { Component, Input } from "@angular/core";
import { Solution } from "../../app/editor/models/solution";
import { Page } from "../../app/editor/models/page";

@Component({
    selector: 'dip-editor-two-columns',
    templateUrl: 'editor-two-columns.component.html'
})
export class EditorTwoColumnsComponent {
    @Input() solution: Solution;
    @Input() page: Page;

    constructor (){}
}