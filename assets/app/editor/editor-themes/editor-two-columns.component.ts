import { Component, OnInit, Input } from "@angular/core";

import { Solution } from "../models/solution";
import { Page } from "../models/page";

@Component({
    selector: 'dip-editor-two-columns',
    templateUrl: 'editor-two-columns.component.html'
})
export class EditorTwoColumnsComponent implements OnInit{
    @Input() solution: Solution;
    @Input() page: Page;

    constructor (){}

    ngOnInit(): void {
    }

}